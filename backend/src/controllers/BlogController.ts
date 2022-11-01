// Copyright(c) 2022 Berk Kırtay

import express from "express";
import { deleteBlogContent, readBlogContent, uploadBlogContent } from '../helpers/IOHelper';
import { Blog } from "../models/BlogModel";

export const ProtectedBlogController = express.Router();
export const UnprotectedBlogController = express.Router();

UnprotectedBlogController.get("/getblogs", async (req: express.Request, res: express.Response) => {
    return Blog.find((err: any, blogs: any) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
        }
        else if (blogs) {
            res.status(200).send(blogs);
        }
        else {
            res.status(404).send();
        }
    });
});

UnprotectedBlogController.get("/blog/:blogId", async (req: express.Request, res: express.Response) => {
    const param = req.params.blogId;
    return Blog.findOne({ _id: param })
        .then(async (data) => {
            if (data) {
                const content = await readBlogContent(data._id.toString());
                const blog = {
                    _id: data._id.toString(),
                    content: content,
                    title: data.title,
                    date: data.date
                }
                res.status(200).send(blog);
            }
            else {
                throw "There is no document with given blogId!";
            }
        }).catch((err: any) => {
            console.log(err);
            res.status(404).send();
        });
});

ProtectedBlogController.post("/postblog", async (req: express.Request, res: express.Response) => {
    // A mapper library can be used here.
    if (req.body.title &&
        req.body.content &&
        req.body.date
    ) {
        const blog = new Blog();
        blog.title = req.body.title;
        blog.shortContent = req.body.content.slice(0, 200);
        blog.date = req.body.date;
        return blog.save(async (err: any, success) => {
            if (err) {
                res.status(500).send({ err: err });
                console.log(err);
            }
            else {
                await uploadBlogContent(req.body.content, success.id);
                res.status(200).send({ result: "Success" });
            }
        });
    }
    else {
        res.status(404).send({ err: "Incorrect request body usage!" });
    }
});

ProtectedBlogController.get("/deleteblog/:blogId", async (req: express.Request, res: express.Response) => {
    if (req.params.blogId) {
        return Blog.deleteOne({ _id: req.params.blogId }).then(async (data) => {
            if (data) {
                await deleteBlogContent(req.params.blogId);
                res.status(200).send(data);
            }
            else {
                res.status(404).send();
            }
        }).catch((err: any) => {
            res.status(500).send({ err: err });
            console.log(err);
        });
    }
    else {
        res.status(404).send({ err: "Empty blogId param is given!" });
    }
})

ProtectedBlogController.post("/updateblog", async (req: express.Request, res: express.Response) => {
    if (req.body.blogId &&
        req.body.blog.title &&
        req.body.blog.date &&
        req.body.blog.content
    ) {
        return Blog.findOneAndUpdate({ _id: req.body.blogId }, {
            title: req.body.blog.title,
            date: req.body.blog.date,
            shortContent: req.body.blog.content.slice(0, 200)
        }, async (err: any) => {
            if (err) {
                res.status(500).send({ err: err });
                console.log(err);
            }
            else {
                await uploadBlogContent(req.body.blog.content, req.body.blogId);
                res.status(200).send({ result: "Success" });
            }
        });
    }
    else {
        res.status(404).send({ err: "Incorrect request body usage!" });
    }
});