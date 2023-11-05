import { useAtom } from 'jotai'
import React from 'react'
import userData from './UserData'

export default function DescriptionBox(props) {

    const [userDataJSON, useUserDataJSON] = useAtom(userData);

    let description = "";

    switch (props.experience) {
        case "educationalExperience":
            description = userDataJSON.educationalExperiences.description;
          break;
        case "professionalExperience":
          description = userDataJSON.workExperiences.description;
          break;
        case "leadershipExperience":
          description = userDataJSON.leadershipExperiences.description;
          break;
      }

  return (
    <div id="description-box" style={{backgroundColor: "#012269"}}>
        <h2 id="description-title">Description</h2>
        <h2 id="description-section">{description}</h2>
    </div>
  )
}
