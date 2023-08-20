import { writeUserDataJSON } from "@/app/firebase";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import * as React from "react";
import userData from './UserData'

export default function ProfileDialogField(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState("");

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

    const { push } = useRouter();

    const [userName, setUserName] = React.useState("");
    const [userCity, setUserCity] = React.useState("");
    const [userUniversity, setUserUniversity] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");

    let experiencesJSON = {};

    let link = "";

    const getExperiencesJSON = () => {
        // switch (props.experience) {
        //     case "educationalExperience":
        //         link = `/users/${props.userID}/educationalExperiences`;
        //         experiencesJSON = userDataJSON.educationalExperiences;
        //         console.log(experiencesJSON);
        //         break;
        //     case "professionalExperience":
        //         link = `/users/${props.userID}/workExperiences`;
        //         experiencesJSON = userDataJSON.workExperiences;
        //         break;
        //     case "leadershipExperience":
        //         link = `/users/${props.userID}/leadershipExperiences`;
        //         experiencesJSON = userDataJSON.leadershipExperiences;
        //         break;
        // }

        link = `/users/${props.userID}/userData`;
        experiencesJSON = userDataJSON.userData;
    }

    getExperiencesJSON();


    React.useEffect(() => {

        console.log("Experiences in UseEffect: ", experiencesJSON);
        
        try {

        setUserName(experiencesJSON.user);
        setUserCity(experiencesJSON.city);
        setUserUniversity(experiencesJSON.university);
        setUserEmail(experiencesJSON.email);
        // setTitleA(experiencesJSON.experiences[0].title);
        // setTitleB(experiencesJSON.experiences[1].title);
        // setTitleC(experiencesJSON.experiences[2].title);

        // setSubtextA(experiencesJSON.experiences[0].subtext);
        // setSubtextB(experiencesJSON.experiences[1].subtext);
        // setSubtextC(experiencesJSON.experiences[2].subtext);

        // setTextSectionA(experiencesJSON.experiences[0].textSection);
        // setTextSectionB(experiencesJSON.experiences[1].textSection);
        // setTextSectionC(experiencesJSON.experiences[2].textSection);

        // setDescription(experiencesJSON.description);
        }
        catch (e) {
            console.log("Error Loading Experiences: ", experiencesJSON)
        }

        return;
    }, [experiencesJSON]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        writeUserDataJSON(link, {
            user: userName,
            city: userCity,
            university: userUniversity,
            email: userEmail
        }).then(() => {
            push('/');
        })
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{
                fontFamily: 'Right Serif',
                fontWeight: "bold",
                fontStyle: "italic",
                color: "#6298FE",
                borderRadius: "1vw",
                borderColor: "",
            }}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{backgroundColor: "#012269", color: "white"}}>Edit Your Data</DialogTitle>
                <DialogContent sx={{backgroundColor: "white", overflowY: "hidden", color: "white"}}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="City"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userCity}
                        onChange={(e) => {
                            setUserCity(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="University"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userUniversity}
                        onChange={(e) => {
                            setUserUniversity(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={userEmail}
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                    />
                </DialogContent>
                <DialogActions sx={{backgroundColor: "white"}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
