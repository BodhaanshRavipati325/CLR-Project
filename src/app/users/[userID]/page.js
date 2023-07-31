"use client";

import { Button } from "@mui/material";
import { useEffect } from "react";

import GridData from "../../components/GridData";

import { writeUserData } from "../../firebase";

import ProgressLine from "../../components/ProgressBar";
import UserSettings from "../../components/UserButton";

import { child, get, getDatabase, ref } from "firebase/database";
import { useAtom } from "jotai";
import userData from "./UserData";

export default function Page({ params }) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

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
        const dbRef = ref(getDatabase());

        get(child(dbRef, `/users/${params.userID}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Snapshot: ", snapshot.val());
                    setUserDataJSON(snapshot.val());
                } else {
                    writeUserData(params.userID, {
                        user: "",
                        university: "",
                        email: "",
                        city: "",
                        degree: "",
                        achievements: [
                            {
                                name: "",
                                data: [{}],
                            },
                        ],
                    });
                    setUserDataJSON({
                        user: "",
                        university: "",
                        email: "",
                        city: "",
                        degree: "",
                        achievements: [
                            {
                                name: "",
                                data: [{}],
                            },
                        ],
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });

        return;
    }, []);

    return (
        <>
            <div style={{ position: "absolute", marginLeft: "95vw" }}>
                <UserSettings></UserSettings>
            </div>

            <h4 id="update-text">UPDATED {today}</h4>

            <h1 id="title">{userDataJSON.user}</h1>

            <h5 id="title-text">{userDataJSON.degree} , {userDataJSON.university}</h5>

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

            <div
                style={{
                    position: "absolute",
                    width: "40%",
                    marginLeft: "29vw",
                    marginTop: "34vh",
                }}
            >
                <ProgressLine
                    visualParts={[
                        {
                            percentage: "95%",
                            color: "white",
                        },
                    ]}
                />
            </div>

            <GridData userData={userDataJSON}></GridData>
        </>
    );
}
