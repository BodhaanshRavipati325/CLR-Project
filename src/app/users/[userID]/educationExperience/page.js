"use client";

import { Button } from "@mui/material";

import GridData from "../../../components/GridData";
import ProgressLine from "../../../components/ProgressBar";

import { useAtom } from "jotai";
import Link from "next/link";
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

            <div style={{ position: "absolute", marginLeft: "44.5vw" }}>
                <Link href="/">
                    <Button
                        sx={{
                            color: "white",
                            fontFamily: "Air",
                            borderRadius: "10px",
                            borderColor: "#6298FE",
                            borderStyle: "solid",
                            borderWidth: "0.25vw",
                            position: "absolute",
                            marginTop: "29.5vh",
                            width: "125px",
                            height: "auto",
                            color: "#6298FE",
                            fontFamily: "Right Serif",
                            fontWeight: "bold",
                            fontStyle: "italic",
                        }}
                    >
                        Profile
                    </Button>
                </Link>
            </div>

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

            <GridData data={userDataJSON.achievements.education}></GridData>
        </>
    );
}