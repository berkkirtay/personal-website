import express from "express";
import crypt from "crypto-js";
import { confirmOTP, sendOTP } from "../helpers/OTPHelper";
import { Types } from "mongoose";
import { IOTPModel } from "../models/OTPModel";

export const AuthorizationController = express.Router();

AuthorizationController.post("/authorize", async (req: express.Request, res: express.Response) => {
    const authKey = req.body.Authorization;
    const otpKey = req.body.OTP;
    const hashedToken = crypt.SHA256(process.env.AUTH_KEY as string).toString();
    if (authKey && hashedToken === authKey) {
        const otpResult = await confirmOTP() as
            (IOTPModel & {
                _id: Types.ObjectId;
            }) | null;

        if (otpResult) {
            if (otpKey && otpResult.otp === otpKey) {
                console.log("User Authorized.");
                req.session.isAuthorized = true;
                res.status(200).send({
                    status: "authorized",
                    result: "User Authorized."
                });
            }
            else {
                res.status(401).send({ err: "Authorization Error! Wrong OTP." });
                console.log("Authorization Error! Wrong OTP.");
            }
        }
        else {
            sendOTP();
            console.log("OTP is sent.");
            res.status(200).send({
                status: "otp",
                result: "OTP is sent"
            });
        }
    }
    else {
        res.status(401).send({ err: "Authorization Error!" });
        console.log("Authorization Error!");
    }
});

AuthorizationController.get("/checkauth", (req: express.Request, res: express.Response) => {
    if (req.session.isAuthorized === true) {
        res.status(200).send({ result: "Authorized" });
    }
    else {
        res.status(401).send({ err: "Not authorized" });
    }
});

AuthorizationController.get("/destroy", (req: express.Request, res: express.Response) => {
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