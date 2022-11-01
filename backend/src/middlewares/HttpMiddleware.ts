// Copyright(c) 2022 Berk Kırtay

import express from "express";
import { Session } from "../database/Session";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.static('public'));

// Middleware for client requests

app.use((req: express.Request, res: express.Response, next) => {
    console.log('--------------------------------------');
    console.log("New Request ");
    console.log('Host name: ' + req.hostname);
    console.log('Request url: ' + req.path);
    console.log('Request http method: ' + req.method);
    console.log('--------------------------------------');
    next();
})

app.use(Session);
