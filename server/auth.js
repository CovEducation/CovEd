function getFirebaseUID(req, res) {
    console.log(req.query.token);
    try {
      const decodedToken = await firebase.auth().verifyIdToken(req.query.token);
      return res.send({status: 'success', uid: decodedToken.uid});
    } catch (err) {
      console.log(err);
      return res.send({status: 'error', error: err});
    }
  }

  module.exports = {
    getFirebaseUID
  };