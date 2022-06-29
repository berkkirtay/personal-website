import { randomInt } from "crypto";
import { OTP } from "../models/OTPModel";
import { transporter } from "../services/MailService";

export const sendOTP = async () => {
    const otpSaver = new OTP();
    otpSaver.createdAt = new Date();
    otpSaver.userId = process.env.EMAIL_TO as string;
    otpSaver.otp = randomInt(100000, 900000).toString();
    otpSaver.save(async (err, success) => {
        if (err) {
            throw err;
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Verification code from berkkirtay.com',
        text: `OTP : ${otpSaver.otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email is sent: ' + info.response);
        }
    });
};

export const confirmOTP = async () => {
    const res = await OTP.findOne({ userId: process.env.EMAIL_TO as string });
    return res;
}