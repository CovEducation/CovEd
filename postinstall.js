const fs = require("fs")
require("dotenv").config()

fs.writeFile("./google-credentials-heroku.json", process.env.GOOGLE_CONFIG, (err) => {
  console.log("Credentials written");
})
