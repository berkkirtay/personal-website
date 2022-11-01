// Copyright(c) 2022 Berk Kırtay

import express from "express";
import { transporter } from "../services/MailService";

export const ContactController = express.Router();

const sendMail = async (name: string, email: string, text: string) => {
    var mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Email sent by ' + name + ' (' + email + ') ' + ' from your personal website.',
        text: text
    };

    return transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log('Email is sent: ' + info.response);
        }
    });
};

ContactController.post('/', async (req: express.Request, res: express.Response) => {
    if (req.body.name && req.body.email && req.body.text) {
        try {
            await sendMail(req.body.name, req.body.email, req.body.text);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
        finally {
            res.status(200).send({ result: "Email is sent." });
        }
    }
});