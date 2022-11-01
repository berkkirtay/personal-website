// Copyright(c) 2022 Berk Kırtay

import express from "express";
import crypt from "crypto-js";
import { confirmOTP, deleteOTP, sendOTP } from "../helpers/OTPHelper";
import { Types } from "mongoose";
import { IOTPModel } from "../models/OTPModel";

export const AuthorizationController = express.Router();

AuthorizationController.post("/authorize", async (req: express.Request, res: express.Response) => {
    const hashedToken = crypt.SHA256(process.env.AUTH_KEY as string).toString();
    if (req.body.Authorization && hashedToken === req.body.Authorization) {
        const otpResult = await confirmOTP() as
            (IOTPModel & {
                _id: Types.ObjectId;
            }) | null;

        if (otpResult) {
            if (req.body.OTP && otpResult.otp === req.body.OTP) {
                console.log("User Authorized.");
                req.session.isAuthorized = true;
                res.status(200).send({
                    status: "authorized",
                    result: "User Authorized."
                });
                await deleteOTP(req.body.OTP);
            }
            else {
                res.status(401).send({
                    status: "err",
                    err: "Authorization Error! Wrong OTP."
                });
                console.log("Authorization Error! Wrong OTP.");
            }
        }
        else {
            try {
                await sendOTP();
            }
            catch (err) {
                console.log("otp mail error: " + err);
                res.status(500).send({
                    status: "err",
                    err: "otp mail error"
                });
            }
            finally {
                console.log("OTP is sent.");
                res.status(200).send({
                    status: "otp",
                    result: "OTP is sent"
                });
            }
        }
    }
    else {
        res.status(401).send({
            status: "err",
            err: "Authorization Error!"
        });
        console.log("Authorization Error!");
    }
});

AuthorizationController.get("/checkauth", (req: express.Request, res: express.Response) => {
    if (req.session.isAuthorized === true) {
        res.status(200).send({ result: "Authorized" });
    }
    else {
        res.status(200).send({ result: "Not_Authorized" });
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