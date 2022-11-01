// Copyright(c) 2022 Berk Kırtay

import { model, Schema, Document } from 'mongoose';

export interface IOTPModel extends Document {
    createdAt: Date
    userId: string,
    otp: string
}

const otpSchema = new Schema({
    createdAt: {
        type: Date, expires: 180
    },
    userId: {
        type: String,
        required: "true"
    },
    otp: {
        type: String,
        required: "true"
    }
});

export const OTP = model<IOTPModel>("OTP", otpSchema);