const { google } = require('googleapis');
const mongoose = require('mongoose');
const fs = require('fs');
require("dotenv").config({path: '../.env'})

const { authorize } = require('./google_sheets')

const Mentor = require('../server/models/mentor')

// authenticate into google api and then upload mentor_data
fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    // TODO: I dont like this starter code; probably want to rewrite to use async/await
    authorize(JSON.parse(content), upload_mentor_data); 
});
 
const MENTOR_SPREADSHEET = { 
    spreadsheetId: '1WF7al7SOlf3ntEUwVEa2BwQw10jfzwdfOO7lkM6QUvw',
    range: 'Form Responses 1' 
};

async function upload_mentor_data(auth) {
    const sheets = google.sheets({version: 'v4', auth});

    try {
        let rows = (await sheets.spreadsheets.values.get(MENTOR_SPREADSHEET)).data.values;
        let mentors = parse_spreadsheet(rows);
        await put_mentors(mentors);
    } catch (err) {
        console.log('Google Sheets API Error: ' + err);
    }
}

/**
 * 
 * @param {*} rows 
 */
function parse_spreadsheet(rows) {
    let mentors = [];

    rows.forEach(mentor_raw => {

        const mentor = {
            name : mentor_raw[1],
            email : mentor_raw[2],
            phone_num : mentor_raw[3],
            class_year : mentor_raw[4],
            college : mentor_raw[5],
            major : mentor_raw[6],
            location : mentor_raw[7],
            time_zone : mentor_raw[8], // phyllis computed hour offsets from EST 
            subjects_raw : mentor_raw[9],
            college_raw : mentor_raw[10],
            other_langs : mentor_raw[11],
            comments : mentor_raw[12],
            grade_levels : mentor_raw[13]
        };
        
        /** Cleaning up the form responses */

        // TODO: normalize phone number formats
        mentor.phone = mentor.phone_num;

        mentor.subjects = mentor.subjects_raw.split(",").map(str => str.trim());
        
        // TODO: college prep needs to become a list of strings 
        // mentor.college_prep = mentor.college_raw.split(",").map(str => str.trim());
        
        // TODO: figure out how to parse this
        // mentor.grade_levels_to_mentor = mentor.grade_levels.split(",").map(str => str.trim());

        // TODO: languages 
        // mentor.languages_spoken = mentor.other_langs;

        mentors.push(new Mentor(mentor));
    });

    return mentors;
}

/**
 * 
 * @param {*} mentors 
 */
async function put_mentors(mentors) {
    // TODO change connection URL after setting up your team database
    const mongoConnectionURL = process.env.MONGO_URI;
    // TODO change database name to the name you chose
    const databaseName = "Coved-Mentor-Test";

    try {
        // open mongodb connection
        await mongoose
            .connect(mongoConnectionURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: databaseName,
            });
        
        // insert mentors to db
        const docs = await Mentor.insertMany(mentors);
        console.log("pushed, " +  docs);

    } catch (err) {
        console.log('MongoDB Error: ', err);
    }

    // close the connection
    mongoose.connection.close(); // I don't like putting this here
}
