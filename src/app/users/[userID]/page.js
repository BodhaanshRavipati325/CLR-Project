"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import GridData from "../../components/GridData";

import { readUserData, readUserDataA, writeUserData } from "../../firebase";

// import { getDatabase, ref, onValue, child, get} from "firebase/database";
import ProgressLine from "../../components/ProgressBar";
import { UserButton } from "@clerk/nextjs";
import UserSettings from "../../components/UserButton";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

export default function Page({ params }) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    const [userDataJSON, setUserDataJSON] = useState(
        {
            "user": "",
            "degree": "",
            "achievements": [
                {
                    "name": "",
                    "data": [{}]
                }
            ]
        }
    );

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
        // async function getUserData() {
        // writeUserData(params.userID, {
        //     "user": "John Doe",
        //     "degree": "BS in Computer Science",
        //     "achievements": [
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         },
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         },
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         },
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         },
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         },
        //         {
        //             "name": "Test",
        //             "data": [
        //                 { "name": "Teste3e3ewe3", "color": "grew2w2wen" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" },
        //                 { "name": "Test", "color": "green" }
        //             ]
        //         }
        //     ]
        // }).then(() => {
        // setUserDataJSON(await readUserDataA(params.userID));

        // return readUserDataA(params.userID);
        //  setUserDataJSON(readUserDataA(params.userID));
        // }
        // ).then((response) => {
        //     setUserDataJSON(response);
        //     console.log(userDataJSON);
        // })
        // }
        // getUserData();

        // readUserDataA(params.userID).then((response) => {
        //     console.log(response);
        //     // setUserDataJSON(response);
        // })

        const dbRef = ref(getDatabase());
        get(child(dbRef, `/users/${params.userID}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    setUserDataJSON(snapshot.val());
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


        // console.log(userDataJSON)

        return;
    }, []);

    return (
        <>
            <div style={{ position: "absolute", marginLeft: "95vw" }}>
                <UserSettings></UserSettings>

            </div>

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

            <div style={{ position: "absolute", width: "40%", marginLeft: "29vw", marginTop: "34vh" }}>
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
