const express = require('express');
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
    Blog.findOne({ _id: param }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        console.log(err);
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

protectedRouter.post("/postblog", (req, res) => {

    const blog = new Blog();
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.date = req.body.date;
    blog.save((err, success) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send("Success");
    });
});

protectedRouter.post("/updateblog", (req, res) => {
    const blogId = req.body.blogId;
    const blogBody = req.body.blog;

    Blog.findOneAndUpdate({ _id: blogId }, {
        title: blogBody.title,
        date: blogBody.date, content: blogBody.content
    }, (err, success) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send("Success");
    });
});

module.exports = {
    protectedprotectedRouter: protectedRouter,
    unprotectedprotectedRouter: unprotectedRouter
};