import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

let userData = atomWithStorage('userData', {
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

let userID = atomWithStorage('userID', { "userID": "" });

export default userData;