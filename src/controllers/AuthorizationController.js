const express = require('express');
const router = express.Router();
const crypt = require("crypto-js");
const base64 = require("js-base64");

router.post("/authorize", async (req, res) => {
    const authKey = req.body.Authorization;
    const hashedToken = crypt.SHA256(process.env.AUTH_KEY).toString();

    if (hashedToken === authKey) {
        console.log("User Authorized.");
        req.session.isAuthorized = true;
        res.status(200).send("User Authorized.");
    }
    else {
        res.status(401).send("Authorization Error!");
        console.log("Authorization Error!");
    }
});

router.get("/checkauth", (req, res) => {
    if (req.session.isAuthorized === true) {
        res.status(200).send("Authorized.");
    }
    else {
        res.status(401).send("Authorization Error!");
    }
});

router.get("/destroy", (req, res) => {
    req.session.isAuthorized = false;
    req.session.destroy();
    res.status(200).send("Authorized session is end.");
    console.log("Authorized session is end.");
});

module.exports = router;