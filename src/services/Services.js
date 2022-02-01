require('dotenv').config()
const express = require('express');
const app = express();
const Session = require("../database/Session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.static('public'));

// Middleware for client requests

app.use((req, res, next) => {
    console.log('--------------------------------------');
    console.log("New Request ");
    console.log('Host name: ' + req.hostname);
    console.log('Request url: ' + req.path);
    console.log('Request http method: ' + req.method);
    console.log('--------------------------------------');
    next();
})

app.use(Session);

module.exports = {
    app: app
} 
