"use client"

import { useAtom } from 'jotai';
import React from 'react'
import userData from './UserData'

export default function LeadershipExperiences() {
    
    let [userDataJSON, setUserDataJSON] = useAtom(userData);
    let list = <></>;
    try {
        list = userDataJSON.leadershipExperiences.experiences.map((data) => (
            <div key={data.department} id="header-row">
                <h2 id="header-title">{data.title}</h2>
                <h2 id="header-title">{data.subtext}</h2>
                <h2 id="header-description">{data.textSection}</h2>
            </div>
        ));
    }
    catch (e) {
        console.log("Error Loading Experiences: ", userDataJSON);
    }
    return (
        <div id="leadership-experiences">
            {list}
        </div>
    )
}
