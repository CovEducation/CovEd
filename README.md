
# CovEd
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![BCH compliance](https://bettercodehub.com/edge/badge/johancc/CovEd?branch=master)](https://bettercodehub.com/)
[![GitHub issues](https://img.shields.io/github/issues/johancc/CovEd.svg)](https://gitHub.com/johancc/CovEd/issues/)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/johancc/Coved-Backend.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/johancc/Coved-Backend/alerts/)
![David](https://img.shields.io/david/johancc/CovEd?color=blue)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=blue&up_message=online&url=http%3A%2F%2Fcoved.herokuapp.com%2F)

This repository contains the frontend and backend code for CovEd's website. The website is built using ReactJS, Firebase, and MongoDB.

## Setup

1) To ensure that the website has the required credentials, before installing
make a .env file that contains the following:

```
MONGO_URI = "$MongoDB URI"
EMAIL_USER = "$SomeEmail"
EMAIL_PASS = "$Password" 
GOOGLE_CONFIG = "$GoogleProjectConfigFileContent"
GOOGLE_APPLICATION_CREDENTIALS = "./google-credentials-heroku.json"
```

2) Install dependencies & build

```
npm install
npx webpack
```

3) Start the server and client
```
npm start & npm run hotloader
```
