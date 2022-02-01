const mongoose = require("mongoose");
const session = require('express-session');
const store = require("connect-mongodb-session")(session);

mongoose.connect('mongodb://localhost/PersonalBlogs')
    .then(success => {
        console.log("Successfully connected to mongodb.");
    }).catch(err => {
        console.log(err);
    });

const mongoStore = store({
    uri: 'mongodb://localhost/PersonalBlogs',
    collection: "sessions",
});


const Session = session({
    secret: "session",
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    isAuthorized: Boolean,
    cookie: {
        maxAge: 60 * 1000 * 60
    },
});

module.exports = Session;