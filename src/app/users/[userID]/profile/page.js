"use client"

import { useAtom } from 'jotai'
import userData from '../UserData'
import Profile from './Profile'

import editIcon from '../../../../../public/editIcon.svg'
import buildingIcon from '../../../../../public/buildingIcon.png';
import contractIcon from '../../../../../public/contractIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import ColumnBox from './ColumnBox'
import RowBox from './RowBox'

export default function Page() {

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

    return (
        <>
            <div id="column-container">
                <div id="profile-container">
                    <div id="profile-picture">
                    </div>
                    <div id="profile-info-container">
                        <p>{userDataJSON.user}</p>
                        <p>{userDataJSON.university}</p>
                        <p>{userDataJSON.email}</p>
                        <p>{userDataJSON.city}</p>
                    </div>
                </div>
                <ColumnBox name="Educational Experience" icon={editIcon}></ColumnBox>
                <ColumnBox name="Professional Experience"icon={buildingIcon}></ColumnBox>
                <ColumnBox name="Leadership, Involvement" icon={contractIcon}></ColumnBox>
            </div>
            <div id="row-container">
                <RowBox name="Resume" icon={editIcon}></RowBox>
                <RowBox name="Artifact Hub" icon={editIcon}></RowBox>
                <RowBox name="Diploma" icon={editIcon}></RowBox>
                <RowBox name="Transcript" icon={editIcon}></RowBox>
                <RowBox name="LinkedIn" icon={editIcon}></RowBox>
            </div>
            <div id="education-experiences">
                <div id="header-row">
                    <h2 id="header-title">Student</h2>
                    <h2 id="header-organization">Duke University</h2>
                </div>
                <div id="header-row">
                    <h2 id="header-title">Student</h2>
                    <h2 id="header-organization">Duke University</h2>
                </div>
                <div id="header-row">
                    <h2 id="header-title">Student</h2>
                    <h2 id="header-organization">Duke University</h2>
                </div>
            </div>
        </>
    )
}
