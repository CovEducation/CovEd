const firebase = require("firebase-admin");

async function firebaseMiddleware(req, res, next) {
  try {
    const decodedToken = await firebase.auth().verifyIdToken(req.query.token || req.headers.token || req.body.token);
    req.user = decodedToken;
    next();
  } catch (err) {
    console.log('error' + err);
    return res.sendStatus(403);
  }
}

module.exports = firebaseMiddleware;

