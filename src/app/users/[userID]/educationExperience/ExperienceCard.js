import React from 'react'

export default function ExperienceCard(props) {

    let list = <></>;
    let achievementData = props.experienceData.badges;

    try {
        list = achievementData.map((data) => (
            <>
                {data.name}
            </>
        ));
    }
    catch (e) {
        console.log("Error Loading Achievements: ", props.data)
    }
    
  return (
    <div id="experiences-container">
                    <div style={{ borderColor: "black", borderStyle: "solid", borderRadius: "1vw", borderWidth: "0.25vw", width: "20vw", height: "40vh" }}>
                        <h1 style={{ color: "#012269", fontSize: "1vw" }}>{props.experienceData.name}</h1>
                        <h1 style={{ color: "#012269", fontSize: "1vw" }}>{props.experienceData.description}</h1>
                        <h1 style={{ color: "#012269", fontSize: "1vw" }}>{list}</h1>

                    </div>
                    <div style={{ borderColor: "black", borderStyle: "solid", borderRadius: "1vw", borderWidth: "0.25vw", width: "60vw", height: "40vh" }}>
                        e

                    </div>
                </div>
  )
}
