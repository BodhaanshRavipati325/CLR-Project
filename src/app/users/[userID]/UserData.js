import { atomWithStorage } from "jotai/utils";

let userData = atomWithStorage('userData', {
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
                "university": "",
                "department": "",
                "degree": "",
                "description": ""
            }
        ],
        "description": ""
    },
    "workExperiences": {
        "experiences": [
            {
                "university": "",
                "department": "",
                "degree": "",
                "description": ""
            }
        ],
        "description": ""
    },
    "leadershipExperiences": {
        "experiences": [
            {
                "university": "",
                "department": "",
                "degree": "",
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

export default userData;