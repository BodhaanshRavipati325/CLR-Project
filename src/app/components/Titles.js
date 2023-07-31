"use client"

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import GridData from "./GridData";

import {readUserData, writeUserData} from "../firebase"

import { getDatabase, ref, onValue } from "firebase/database";
import SignInPage from "../sign-in/[...sign-in]/page";
import { useAuth } from "@clerk/nextjs";
import {NextResponse } from "next/server";
import { redirect } from 'next/navigation';

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
      {(!userId) ? <div style={{position: "absolute", marginLeft: "35%", marginTop: "18%"}}><SignInPage></SignInPage></div> : redirect(`/users/${userId}`)}
    </>
  );
}
