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

//var ref = firebase.database().ref('tasks').orderByChild('status').equalTo(0);

export const tasksRef = firebase.database().ref('tasks');
export const tasksRefUpdate = firebase.database().ref();
export default firebaseApp;