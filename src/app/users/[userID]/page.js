"use client"

import { useAtom } from 'jotai'
import userData from './UserData'

import buildingIcon from '../../../../public/buildingIcon.png'
import contractIcon from '../../../../public/contractIcon.png'
import editIcon from '../../../../public/editIcon.svg'
import ColumnBox from './ColumnBox'
import RowBox from './RowBox'

import UserSettings from '@/app/components/UserButton'
import { child, get, getDatabase, ref } from "firebase/database"
import { useEffect } from "react"
import { writeUserData } from "../../firebase"
import EducationExperiences from './EducationExperiences'
import LeadershipExperiences from './LeadershipExperiences'
import WorkExperiences from './WorkExperiences'
import DescriptionBox from './DescriptionBox'
import DialogField from './DialogField'

export default function Page({ params }) {

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

    useEffect(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `/users/${params.userID}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Snapshot: ", snapshot.val());
                    setUserDataJSON(snapshot.val());
                } else {
                    writeUserData(params.userID, {
                        "user": "",
                        "university": "",
                        "email": "",
                        "city": "",
                        "degree": "",
                        "resumeLink": "/",
                        "diplomaLink": "/",
                        "transcriptLink": "/",
                        "linkedInLink": "/",
                        "educationalExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "workExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "leadershipExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "achievements": {
                            "education": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "professional": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "leadership": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ]
                        }
                    });
                    setUserDataJSON({
                        "user": "",
                        "university": "",
                        "email": "",
                        "city": "",
                        "degree": "",
                        "resumeLink": "/",
                        "diplomaLink": "/",
                        "transcriptLink": "/",
                        "linkedInLink": "/",
                        "educationalExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "workExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "leadershipExperiences": {
                            "experiences": [
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                },
                                {
                                    "title": "",
                                    "subtext": "",
                                    "textSection": "",
                                    "description": ""
                                }
                            ],
                            "description": ""
                        },
                        "achievements": {
                            "education": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "professional": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "leadership": [
                                {
                                    "name": "",
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ]
                        }
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
            <div id="edits-container">
                <DialogField experience="educationalExperience" userID={params.userID}>eee</DialogField>
                <DialogField experience="professionalExperience" userID={params.userID}>eee</DialogField>
                <DialogField experience="leadershipExperience" userID={params.userID}>eee</DialogField>
            </div>

            <div id="column-container">
                <div id="profile-container">
                    <div id="profile-picture">
                        <UserSettings></UserSettings>
                    </div>
                    <div id="profile-info-container">
                        <p>{userDataJSON.user}</p>
                        <p>{userDataJSON.university}</p>
                        <p>{userDataJSON.email}</p>
                        <p>{userDataJSON.city}</p>
                    </div>
                </div>
                <ColumnBox name="Educational Experience" icon={editIcon} link={`/users/${params.userID}/educationExperience`}></ColumnBox>
                <ColumnBox name="Professional Experience" icon={buildingIcon} link={`/users/${params.userID}/workExperience`}></ColumnBox>
                <ColumnBox name="Leadership, Involvement" icon={contractIcon} link={`/users/${params.userID}/leadershipExperience`}></ColumnBox>
            </div>
            <div id="row-container">
                <RowBox name="Resume" icon={editIcon} link={userDataJSON.resumeLink}></RowBox>
                <RowBox name="Artifact Hub" icon={editIcon} link="/"></RowBox>
                <RowBox name="Diploma" icon={editIcon} link={userDataJSON.diplomaLink}></RowBox>
                <RowBox name="Transcript" icon={editIcon} link={userDataJSON.transcriptLink}></RowBox>
                <RowBox name="LinkedIn" icon={editIcon} link={userDataJSON.linkedInLink}></RowBox>
            </div>

            <div id="experiences-container">
                <EducationExperiences></EducationExperiences>
                <WorkExperiences></WorkExperiences>
                <LeadershipExperiences></LeadershipExperiences>
            </div>

            <div id="description-container">
                <DescriptionBox experience="educationalExperience"></DescriptionBox>
                <DescriptionBox experience="professionalExperience"></DescriptionBox>
                <DescriptionBox experience="leadershipExperience"></DescriptionBox>
            </div>
        </>
    )
}
