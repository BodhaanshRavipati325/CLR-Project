"use client"

import { useAtom } from 'jotai';
import React from 'react'
import userData from './UserData';

export default function EducationExperiences() {
    
    let [userDataJSON, setUserDataJSON] = useAtom(userData);
    let list = <></>;
    try {
        list = userDataJSON.educationalExperiences.experiences.map((data) => (
            <div key={data.department} id="header-row">
                <h2 id="header-title">{data.university}</h2>
                <h2 id="header-title">{data.department}</h2>
                <h2 id="header-description">{data.degree}</h2>
            </div>
        ));
    }
    catch (e) {
        console.log("Error Loading Experiences: ", userDataJSON);
    }
    return (
        <div id="education-experiences">
            {list}
        </div>
    )
}
