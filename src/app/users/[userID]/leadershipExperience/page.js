"use client";

import { Button } from "@mui/material";

import GridData from "../../../components/GridData";
import ProgressLine from "../../../components/ProgressBar";
import UserSettings from "../../../components/UserButton";

import { useAtom } from "jotai";
import userData from "../UserData";

export default function Page() {
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

    return (
        <>
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

            <GridData userData={userDataJSON.achievements.leadership}></GridData>
        </>
    );
}