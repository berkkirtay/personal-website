const express = require('express');
const { readBlogContent, uploadBlogContent } = require('../helpers/IOHelper');
const protectedRouter = express.Router();
const unprotectedRouter = express.Router();

const mongoose = require("../database/BlogModel").mongoose;
const Blog = mongoose.model("Blog");

unprotectedRouter.get("/getblogs", (req, res) => {
    Blog.find((err, blogs) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send(blogs);
    });
});

unprotectedRouter.get("/blog/:blogId", (req, res) => {
    const param = req.params.blogId;
    Blog.findOne({ _id: param }).then(async (data) => {
        const content = await readBlogContent(data._id.toString());
        const blog = {
            _id: data._id.toString(),
            content: content,
            title: data.title,
            date: data.date
        }
        res.status(200).send(blog);
    }).catch((err) => {
        console.log(err);
        res.status(500).send();
    });
});

protectedRouter.post("/postblog", (req, res) => {
    const blog = new Blog();
    blog.title = req.body.title;
    blog.shortContent = req.body.content.slice(0, 200);
    blog.date = req.body.date;
    blog.save(async (err, success) => {
        if (err) {
            console.log(err);
        }
        else {
            await uploadBlogContent(req.body.content, success.id);
        }
        res.status(200).send("Success");
    });
});

protectedRouter.get("/deleteblog/:blogId", (req, res) => {
    const param = req.params.blogId;
    console.log(param)
    Blog.deleteOne({ _id: param }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        console.log(err);
    });
})

protectedRouter.post("/updateblog", (req, res) => {
    Blog.findOneAndUpdate({ _id: req.body.blogId }, {
        title: req.body.blog.title,
        date: req.body.blog.date,
        shortContent: req.body.blog.content.slice(0, 200)
    }, async (err, success) => {
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