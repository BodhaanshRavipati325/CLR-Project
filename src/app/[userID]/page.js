"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import GridData from "../components/GridData";

import data from "/Users/bodhaanshravipati/clr-project/my-app/public/test.json";
import test from "/Users/bodhaanshravipati/clr-project/my-app/public/testA.json";

import { readUserData, writeUserData } from "../firebase";

import { getDatabase, ref, onValue } from "firebase/database";
import ProgressLine from "../components/ProgressBar";

export default function Page({ params }) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    const [userDataJSON, setUserDataJSON] = useState(data);

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

    useEffect(() => {
        writeUserData(params.userID, test).then(() => {
            return readUserData(params.userID);
        }
        ).then((response) => {
            setUserDataJSON(response);
        })

        console.log(userDataJSON);
        return;
    }, []);

    return (
        <>

            <h4 id="update-text">UPDATED {today}</h4>

            {/* <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Keep Your Crypto Safe",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                    position: "absolute",
                    color: "gold",
                    fontFamily: "Air",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    fontSize: "4vw",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "10vh",
                }}
                repeat={Infinity}
            ></TypeAnimation> */}

            <h1 id="title">{userDataJSON.user}</h1>

            <h5 id="title-text">
                {userDataJSON.degree}
            </h5>

            <Button
                sx={{
                    color: "white",
                    fontFamily: "Air",
                    border: 1,
                    borderRadius: 2,
                    position: "absolute",
                    marginTop: "29.5vh",
                    marginLeft: "43vw",
                }}
            >
                Learn More
            </Button>

            <a href="https://www.coinglass.com/">
                <Button
                    sx={{
                        color: "white",
                        fontFamily: "Air",
                        border: 1,
                        borderRadius: 2,
                        position: "absolute",
                        marginTop: "29.5vh",
                        marginLeft: "50vw",
                    }}
                >
                    Data
                </Button>
            </a>

            <div style={{position: "absolute", width: "40%", marginLeft: "29vw", marginTop: "34vh"}}>
                <ProgressLine
                    // label="Full progressbar"
                    visualParts={[
                        {
                            percentage: "95%",
                            color: "white"
                        }
                    ]}
                />

            </div>

            <GridData userData={userDataJSON}></GridData>
        </>
    );
}
