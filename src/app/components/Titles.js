"use client"

import { useAuth } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import SignInPage from "./SignInPage";

export default function Titles() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  today =
    mm +
    "/" +
    dd +
    "/" +
    yyyy +
    " at " +
    today.getHours() +
    ":" +
    today.getMinutes();    

  return (
    <>
      {(!userId) ? <SignInPage></SignInPage> : redirect(`/users/${userId}`)}
    </>
  );
}