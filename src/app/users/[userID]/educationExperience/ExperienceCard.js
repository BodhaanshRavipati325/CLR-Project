import ProgressLine from '@/app/components/ProgressBar';
import React from 'react'
import TranscriptTable from './TranscriptTable';

export default function ExperienceCard(props) {

    let badgesList = <></>;
    let achievementData = props.experienceData.badges;

    try {
        console.log(props.experienceData);
        badgesList = achievementData.map((data) => (
            <>
                <li>{data.name}, {data.organization}</li>
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

                        <div
                style={{
                    position: "relative",
                    width: "100%",
                    // marginLeft: "29vw",
                    // marginTop: "34vh",
                }}
            >
                        <h1 style={{ position: "relative", color: "#012269", fontSize: "1vw", marginBottom: "-2vh"}}>Degree Progress</h1>
                <ProgressLine
                    visualParts={[
                        {
                            percentage: "95%",
                            color: "white",
                        },
                    ]}
                />
            </div>
                        
                        <ul style={{ color: "#012269", fontSize: "1vw" }}>{badgesList}</ul>

                    </div>
                    <div style={{ borderColor: "black", borderStyle: "solid", borderRadius: "1vw", borderWidth: "0.25vw", width: "60vw", height: "40vh" }}>
                        <TranscriptTable data={props.experienceData.data}></TranscriptTable>

                    </div>
                </div>
  )
}
