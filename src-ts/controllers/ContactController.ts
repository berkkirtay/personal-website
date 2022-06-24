import express from "express";
const router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/', (req: express.Request, res: express.Response) => {
    try {
        var body = req.body;
        const name = body.name;
        const email = body.email;
        const text = body.text;

        var mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Email sent by ' + name + ' (' + email + ') ' + ' from your personal website.',
            text: text
        };

        transporter.sendMail(mailOptions, (error: Error, info: { response: string; }) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).send("success");
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;