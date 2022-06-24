import mongoose from "mongoose";
import session from "express-session";
import store from "connect-mongodb-session";

declare module 'express-session' {
    interface SessionData {
        isAuthorized: Boolean
    }
}

const BindedStore = store(session);

mongoose.connect('mongodb://localhost/PersonalBlogs')
    .then((success: any) => {
        console.log("Successfully connected to mongodb.");
    }).catch((err: any) => {
        console.log(err);
    });

const mongoStore = new BindedStore({
    uri: 'mongodb://localhost/PersonalBlogs',
    collection: "sessions",
});


export const Session = session({
    secret: "session",
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
        maxAge: 60 * 1000 * 60
    },
});