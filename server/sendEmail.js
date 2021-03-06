const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require('fs');
const path = require("path");
const mandrillTransport = require("nodemailer-mandrill-transport");

require('dotenv').config();

const massTransporter = nodemailer.createTransport(mandrillTransport({
    auth: {
        apiKey: process.env.MANDRILL_KEY,
    }
}));

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
        from: "CovEd <coved@coved.org>",
        to: mentorEmail,
        subject: "CovEd Match!",
        html: htmlToSend,
    };
    await massTransporter.sendMail(mailOptions);
}

/**
 * Sends an email to the parent verifying their mentor request.
 * @param {string} guardianName - Name of the guardian
 * @param {string} guardianEmail - Email address of the guardian
 */
async function emailGuardian(guardianName, guardianEmail, mentorFirst) {
    const replacements = {
        guardianName: guardianName,
        mentorFirst: mentorFirst,
    };
    const htmlToSend = verificationTemplate(replacements);
    const mailOptions = {
        from: "CovEd <coved@coved.org>",
        to: guardianEmail,
        subject: "CovEd Mentor Request",
        html: htmlToSend,
    };
    await massTransporter.sendMail(mailOptions);
}

/**
 * Sends a reminder email to users which have verified their email.
 * @param {string} userEmail
 */
async function sendPrivacyReminderEmail(userEmail) {
    const htmlToSend = reminderTemplate({});
    const mailOptions = {
        from: "CovEd <coved@coved.org>",
        to: userEmail,
        subject: "Thank you for signing up with CovEd!",
        html: htmlToSend,
    }
    await massTransporter.sendMail(mailOptions);
};

module.exports = {
    emailMentor: emailMentor,
    emailGuardian: emailGuardian,
    sendPrivacyReminderEmail: sendPrivacyReminderEmail,
}
