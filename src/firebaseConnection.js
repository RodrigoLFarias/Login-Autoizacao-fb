import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import App from '../App';


const firebaseConfig = {
  apiKey: "AIzaSyAgrLg8xlrRf_xquUYD7sQhldJQ3Ta4MNE",
  authDomain: "aprendendo-firebase-1b202.firebaseapp.com",
  databaseURL: "https://aprendendo-firebase-1b202-default-rtdb.firebaseio.com",
  projectId: "aprendendo-firebase-1b202",
  storageBucket: "aprendendo-firebase-1b202.appspot.com",
  messagingSenderId: "984136388168",
  appId: "1:984136388168:web:1dc9771c37d8c3b206527d",
  measurementId: "G-BBKP9XBY9D"

};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase
  