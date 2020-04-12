import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD5TA_oyBIV5ElJ-CEi_dJdaN3VzvrBlvc",
    authDomain: "coveducation-13eda.firebaseapp.com",
    databaseURL: "https://coveducation-13eda.firebaseio.com",
    projectId: "coveducation-13eda",
    storageBucket: "coveducation-13eda.appspot.com",
    messagingSenderId: "277574594883",
    appId: "1:277574594883:web:ce5dab3eaab6d811333ff6"
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth();
