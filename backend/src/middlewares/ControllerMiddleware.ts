// Copyright(c) 2022 Berk Kırtay

import * as services from "./HttpMiddleware"
import express from "express";
import { AuthorizationController } from "../controllers/AuthorizationController";
import { ProtectedBlogController, UnprotectedBlogController } from "../controllers/BlogController";
import { ContactController } from "../controllers/ContactController";

export const app = services.app;

const isAuthorized = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.session.isAuthorized === true) {
        next();
    }
    else {
        res.status(401).send({ err: "Authorization error!" });
    }
}

app.use("/auth", AuthorizationController)
app.use("/contact", ContactController);
app.use("/", UnprotectedBlogController);
app.use("/", isAuthorized, ProtectedBlogController);

// If server receives an undefined request, it will return a 404 error.

app.use('/', (req, res) => {
    return res.status(404)
        .send({ err: "The requested address does not exist!" });
})

