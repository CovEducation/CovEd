/**
 * This script writes a MongoDB into a JSON file. Before making collection-wide updates,
 * please run this script to snapshot the database. Let's not delete our mentors :).
 */
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI_PROD = process.env.MONGO_URI_PROD;
const DATABASE_NAME = 'Coved-Tutor-Test'; // Update.
const Mentor = require('../server/models/mentor');
const { exit } = require('process');


const backupMongoToJSON = () => {
    Mentor.countDocuments((err, count) => {
        if (err) throw err;

        readline.question(`Backup ${count} mentors? Y/N \n`, ans => {
          if (ans !== 'Y' && ans !== 'y') {
              console.log('Aborting backup.');
              exit();
          }
  
          readline.question(`Output filename? Do not include ".json" at the end.\n`, filename => {
              console.log('Retrieving mentors...');
              Mentor.find({}).then((mentors) => {
                  console.log(`Writing mentors to ${filename + '.json'}...`);
                  fs.writeFileSync(filename + '.json', JSON.stringify(mentors), (err) => {
                      if (err) throw err;
                      console.log(`Data written to ${filename + '.json'}`);
                  });
              })
          })
        })
    })
  }
  

  

mongoose.connect(MONGO_URI_PROD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DATABASE_NAME,
}).then(() => {
    console.log('Connected to MongoDB');
    backupMongoToJSON();
});

