"use client"

import { useAtom } from 'jotai'

import buildingIcon from '../../../../public/building.png'
import contractIcon from '../../../../public/contract.png'
import diplomaIcon from '../../../../public/diploma.png'
import editIcon from '../../../../public/editIcon.png'
import linkedInIcon from '../../../../public/linkedin.png'
import resumeIcon from '../../../../public/resume.png'
import transcriptIcon from '../../../../public/school.png'

import ColumnBox from './ColumnBox'
import RowBox from './RowBox'

import UserSettings from '@/app/components/UserButton'
import { child, get, getDatabase, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { writeUserData } from "../../firebase"
import DescriptionBox from './DescriptionBox'
import DialogField from './DialogField'
import EducationExperiences from './EducationExperiences'
import LeadershipExperiences from './LeadershipExperiences'
import UploadButton from './UploadButton'
import WorkExperiences from './WorkExperiences'

import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage"
// import ProfileDialogField from './ProfileDialogField'
import userData from './UserData'
import ProfileDialogField from './ProfileDialogField'

export default function Page({ params }) {

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

    const [resumeURL, setResumeURL] = useState("/");
    const [diplomaURL, setDiplomaURL] = useState("/");

    useEffect(() => {

        const dbRef = ref(getDatabase());

        get(child(dbRef, `/users/${params.userID}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("Snapshot: ", snapshot.val());
                    setUserDataJSON(snapshot.val());
                } else {
                    writeUserData(params.userID, {
                        "userData": {
                            "user": "",
                            "university": "",
                            "email": "",
                            "city": "",
                        },
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
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "class": "",
                                        "grade": "",
                                        "term": "",
                                    }]
                                }
                            ],
                            "professional": [
                                {
                                    "name": "",
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "leadership": [
                                {
                                    "name": "",
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                        },
                        "artifactHub": [
                            {
                                "id": "",
                                "name": "e3e3e",
                                "description": "",
                                "imageLink": ""
                            }
                        ]
                    });
                    setUserDataJSON({
                        "userData": {
                            "user": "",
                            "university": "",
                            "email": "",
                            "city": "",
                        },
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
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "class": "",
                                        "grade": "",
                                        "term": "",
                                    }]
                                }
                            ],
                            "professional": [
                                {
                                    "name": "",
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                            "leadership": [
                                {
                                    "name": "",
                                    "description": "",
                                    "badges": [
                                        {
                                            "name": "",
                                            "organization": ""
                                        },
                                    ],
                                    "data": [{
                                        "name": "",
                                        "color": ""
                                    }]
                                }
                            ],
                        },
                        "artifactHub": [
                            {
                                "id": "",
                                "name": "e3e3e",
                                "description": "",
                                "imageLink": ""
                            }
                        ]
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });

        getDownloadURL(storageRef(getStorage(), `resumes/${params.userID}`))
            .then((url) => {
                setResumeURL(url);
            })
            .catch((error) => {
                console.log(error);
            });

        getDownloadURL(storageRef(getStorage(), `diplomas/${params.userID}`))
            .then((url) => {
                setDiplomaURL(url);
            })
            .catch((error) => {
                console.log(error);
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
                <div id="profile-container" style={{backgroundColor: "#012269"}}>
                    <div id="profile-picture">
                        <UserSettings></UserSettings>
                    </div>
                    <div id="profile-info-container" style={{color: "white"}}>
                        <p>{userDataJSON.userData.user}</p>
                        <p>{userDataJSON.userData.university}</p>
                        <p>{userDataJSON.userData.email}</p>
                        <p>{userDataJSON.userData.city}</p>
                        <ProfileDialogField userID={params.userID}></ProfileDialogField>
                    </div>
                </div>
                <ColumnBox name="Educational Experience" icon={editIcon} link={`/users/${params.userID}/educationExperience`}></ColumnBox>
                <ColumnBox name="Professional Experience" icon={buildingIcon} link={`/users/${params.userID}/workExperience`}></ColumnBox>
                <ColumnBox name="Leadership, Involvement" icon={contractIcon} link={`/users/${params.userID}/leadershipExperience`}></ColumnBox>
            </div>
            <div id="row-container">
                <RowBox name="Resume" icon={resumeIcon} link={resumeURL}>
                    <UploadButton path={`resumes/${params.userID}`} state={setResumeURL}></UploadButton>
                </RowBox>
                <RowBox name="Artifact Hub" icon={editIcon} link={`/users/${params.userID}/artifactHub`}>
                </RowBox>
                <RowBox name="Diploma" icon={diplomaIcon} link={diplomaURL}>
                    <UploadButton path={`diplomas/${params.userID}`} state={setDiplomaURL}></UploadButton>
                </RowBox>
                <RowBox name="Transcript" icon={transcriptIcon} link={userDataJSON.transcriptLink}></RowBox>
                <RowBox name="LinkedIn" icon={linkedInIcon} link={userDataJSON.linkedInLink}></RowBox>
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
