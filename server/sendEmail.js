
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require('fs');
const path = require("path");
require('dotenv').config();
const email_user = process.env.EMAIL_USER;
const email_pass = process.env.EMAIL_PASS;

module.exports = async function sendEmail(email, mentorfirst, studentemail, message) {
    const filePath = path.join(__dirname, 'templates/match/match.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        mentorfirst: mentorfirst,
        studentemail: studentemail,
        message: message,
    };
    const htmlToSend = template(replacements);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email_user,
            pass: email_pass,
        }
    });
    const mailOptions = {
        from: "CovED <coveducation@gmail.com>",
        to: email,
        subject: "CovED Match!",
        html: htmlToSend,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", "https://mailtrap.io/inboxes/test/messages/");

}