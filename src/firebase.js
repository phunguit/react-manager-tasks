import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD643zMpAf9vygT-TM5DfAgixlnkolAfsY",
    authDomain: "manager-tasks.firebaseapp.com",
    databaseURL: "https://manager-tasks.firebaseio.com",
    projectId: "manager-tasks",
    storageBucket: "manager-tasks.appspot.com",
    messagingSenderId: "399894584880"
};
const firebaseApp = firebase.initializeApp(config);

firebase.database().ref('tasks/' + 'asdasdasasd').set({
    id: '23',
    name: 'This is phung'
});

export default firebaseApp;