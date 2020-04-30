const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require('fs');
const path = require("path");
require('dotenv').config();
const email_user = process.env.EMAIL_USER;
const email_pass = process.env.EMAIL_PASS;
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email_user,
        pass: email_pass,
    }
});

// HTML Templates

const matchFilepath = path.join(__dirname, 'templates/match.html');
const matchSource = fs.readFileSync(matchFilepath, 'utf-8').toString();
const matchTemplate = handlebars.compile(matchSource);

const verificationFilepath = path.join(__dirname, "templates/verification.html");
const verificationSource = fs.readFileSync(verificationFilepath, "utf-8").toString();
const verificationTemplate = handlebars.compile(verificationSource);

const reminderFilepath = path.join(__dirname, 'templates/reminder.html');
const reminderSource = fs.readFileSync(reminderFilepath, 'utf-8').toString();
const reminderTemplate = handlebars.compile(reminderSource);

/**
 * Sends an email to a mentor based on the CovEd match template.
 * @param {string} email - Email address of the mentor
 * @param {string} mentorFirst- First name of the mentor
 * @param {string} studentEmail Email of the mentee
 * @param {string} message Personalized messsage from the mentee to mentor
 */
async function emailMentor(mentorEmail, mentorFirst, studentEmail, message) {
    const replacements = {
        mentorfirst: mentorFirst,
        studentemail: studentEmail,
        message: message,
    };
    const htmlToSend = matchTemplate(replacements);
    const mailOptions = {
        from: "CovEd <coveducation@gmail.com>",
        to: mentorEmail,
        subject: "CovEd Match!",
        html: htmlToSend,
    };
    await transporter.sendMail(mailOptions);
}

/**
 * Sends an email to the parent verifying their mentor request.
 * @param {string} guardianName - Name of the guardian
 * @param {string} guardianEmail - Email address of the guardian
 */
async function emailGuardian(guardianName, guardianEmail) {
    const replacements = {
        guardianName: guardianName,
    };
    const htmlToSend = verificationTemplate(replacements);
    const mailOptions = {
        from: "CovEd <coveducation@gmail.com>",
        to: guardianEmail,
        subject: "CovEd Mentor Request",
        html: htmlToSend,
    };
    await transporter.sendMail(mailOptions);
}

/**
 * Sends a reminder email to users which have verified their email.
 * @param {string} userEmail
 */
async function sendPrivacyReminderEmail(userEmail) {
    const htmlToSend = reminderTemplate({});
    const mailOptions = {
        from: "CovEd <coveducation@gmail.com",
        to: userEmail,
        subject: "Thank you for signing up with CovEd!",
        html: htmlToSend,
    }
    await transporter.sendMail(mailOptions);
};

module.exports = {
    emailMentor: emailMentor,
    emailGuardian: emailGuardian,
    sendPrivacyReminderEmail: sendPrivacyReminderEmail,
}