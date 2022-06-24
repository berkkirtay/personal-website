import express from "express";
const router = express.Router();
import crypt from "crypto-js";

router.post("/authorize", async (req: express.Request, res: express.Response) => {
    const authKey = req.body.Authorization;
    const hashedToken = crypt.SHA256(process.env.AUTH_KEY as string).toString();

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

router.get("/checkauth", (req: express.Request, res: express.Response) => {
    if (req.session.isAuthorized === true) {
        res.status(200).send("Authorized.");
    }
    else {
        res.status(401).send("Authorization Error!");
    }
});

router.get("/destroy", (req: express.Request, res: express.Response) => {
    req.session.isAuthorized = false;
    req.session.destroy(err => {
        res.status(500).send(err);
    });
    res.status(200).send("Authorized session is end.");
    console.log("Authorized session is end.");
});

module.exports = router;