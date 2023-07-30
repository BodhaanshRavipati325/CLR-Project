"use client";

import Image from "next/image";
import Titles from "./components/Titles";
import styles from "./page.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import { getDatabase, ref, set } from "firebase/database";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdGwXJLvwKvMYfJwIn4NNlqhXYzJSa9SE",
  authDomain: "clr-project-d126e.firebaseapp.com",
  projectId: "clr-project-d126e",
  storageBucket: "clr-project-d126e.appspot.com",
  messagingSenderId: "795885607945",
  appId: "1:795885607945:web:ebd3d5662fffcf3097acd8",
  measurementId: "G-KRZ038HLWT",
  databaseURL: "https://clr-project-d126e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

const db = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, "test/"), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

export default function Home() {

  useEffect(() => {
    // writeUserData(2, 1, 1, 1);

  }, []);

  return (
    <>
      <Titles></Titles>
    </>
  );
}
