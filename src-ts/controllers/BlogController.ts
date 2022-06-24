import express from "express";
import { readBlogContent, uploadBlogContent } from '../helpers/IOHelper';
import { Blog } from "../database/BlogModel";

const protectedRouter = express.Router();
const unprotectedRouter = express.Router();

unprotectedRouter.get("/getblogs", (req: express.Request, res: express.Response) => {
    Blog.find((err: any, blogs: any) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(blogs);
    });
});

unprotectedRouter.get("/blog/:blogId", (req: express.Request, res: express.Response) => {
    const param = req.params.blogId;
    Blog.findOne({ _id: param })
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
                throw "Document doesn't exist!";
            }
        }).catch((err: any) => {
            console.log(err);
            res.status(500).send();
        });
});

protectedRouter.post("/postblog", (req: express.Request, res: express.Response) => {
    const blog = new Blog();
    blog.title = req.body.title;
    blog.shortContent = req.body.content.slice(0, 200);
    blog.date = req.body.date;
    blog.save(async (err: any, success) => {
        if (err) {
            console.log(err);
        }
        else {
            await uploadBlogContent(req.body.content, success.id);
        }
        res.status(200).send("Success");
    });
});

protectedRouter.get("/deleteblog/:blogId", (req: express.Request, res: express.Response) => {
    const param = req.params.blogId;
    console.log(param)
    Blog.deleteOne({ _id: param }).then(data => {
        res.status(200).send(data);
    }).catch((err: any) => {
        console.log(err);
    });
})

protectedRouter.post("/updateblog", (req: express.Request, res: express.Response) => {
    Blog.findOneAndUpdate({ _id: req.body.blogId }, {
        title: req.body.blog.title,
        date: req.body.blog.date,
        shortContent: req.body.blog.content.slice(0, 200)
    }, async (err: any, success: any) => {
        if (err) {
            console.log(err);
        }
        else {
            await uploadBlogContent(req.body.blog.content, req.body.blogId);
        }
        res.status(200).send("Success");
    });
});

module.exports = {
    protectedprotectedRouter: protectedRouter,
    unprotectedprotectedRouter: unprotectedRouter
};
