import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
import { useEffect } from "react";

import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-3JhrUauueuJ_1vlvDcc1eU7fEDw-k4",
  authDomain: "clrnew.firebaseapp.com",
  databaseURL: "https://clrnew-default-rtdb.firebaseio.com",
  projectId: "clrnew",
  storageBucket: "clrnew.appspot.com",
  messagingSenderId: "314118139337",
  appId: "1:314118139337:web:79970edbde5c56d54b0c18",
  measurementId: "G-0C9R2FKYBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

const db = getDatabase(app);

const storage = getStorage(app);
const mRef = storageRef(storage, 'some-child');

async function writeUserData(userId, data) {
  set(ref(db, "users/" + userId), data);
}

async function writeUserDataJSON(link, data) {
  set(ref(db, link), data);
}

async function readUserData(userId) {
  const userDataRef = ref(db, "users/" + userId);
  let userDataJSON = {};
  onValue(userDataRef, (snapshot) => {
    const data = snapshot.val();
    userDataJSON = data;
  });
  return userDataJSON;
}

async function readUserDataA(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `/users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        writeUserData(userId, {
          user: "",
          degree: "",
          achievements: [
            {
              name: "",
              data: [{}],
            },
          ],
        });
        return readUserDataA(userId);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export { writeUserData, writeUserDataJSON, readUserData, readUserDataA };