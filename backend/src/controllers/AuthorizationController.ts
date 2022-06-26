import express from "express";
import crypt from "crypto-js";

const router = express.Router();

router.post("/authorize", (req: express.Request, res: express.Response) => {
    const authKey = req.body.Authorization;
    const hashedToken = crypt.SHA256(process.env.AUTH_KEY as string).toString();

    if (authKey && hashedToken === authKey) {
        console.log("User Authorized.");
        req.session.isAuthorized = true;
        res.status(200).send({ result: "User Authorized." });
    }
    else {
        res.status(401).send({ err: "Authorization Error!" });
        console.log("Authorization Error!");
    }
});

router.get("/checkauth", (req: express.Request, res: express.Response) => {
    if (req.session.isAuthorized === true) {
        res.status(200).send({ result: "Authorized" });
    }
    else {
        res.status(401).send({ err: "Not authorized" });
    }
});

router.get("/destroy", (req: express.Request, res: express.Response) => {
    req.session.isAuthorized = false;
    req.session.destroy(err => {
        if (err) {
            res.status(500).send({ err: err });
        }
        else {
            res.status(200).send({ resut: "Authorized session is end." });
            console.log("Authorized session is end.");
        }
    });
});

module.exports = router;