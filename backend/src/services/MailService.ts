// Copyright(c) 2022 Berk Kırtay

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secure: false,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS
    },
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    }
});
