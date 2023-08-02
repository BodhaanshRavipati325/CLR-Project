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
import userData from "./UserData";

export default function DialogField(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState("");

    const [userDataJSON, setUserDataJSON] = useAtom(userData);

    const { push } = useRouter();

    const [titleA, setTitleA] = React.useState("");
    const [titleB, setTitleB] = React.useState("");
    const [titleC, setTitleC] = React.useState("");

    const [subtextA, setSubtextA] = React.useState("");
    const [subtextB, setSubtextB] = React.useState("");
    const [subtextC, setSubtextC] = React.useState("");

    const [textSectionA, setTextSectionA] = React.useState("");
    const [textSectionB, setTextSectionB] = React.useState("");
    const [textSectionC, setTextSectionC] = React.useState("");

    const [description, setDescription] = React.useState("");

    let experiencesJSON = {};

    let link = "";

    const getExperiencesJSON = () => {
        switch (props.experience) {
            case "educationalExperience":
                link = `/users/${props.userID}/educationalExperiences`;
                experiencesJSON = userDataJSON.educationalExperiences;
                console.log(experiencesJSON);
                break;
            case "professionalExperience":
                link = `/users/${props.userID}/workExperiences`;
                experiencesJSON = userDataJSON.workExperiences;
                break;
            case "leadershipExperience":
                link = `/users/${props.userID}/leadershipExperiences`;
                experiencesJSON = userDataJSON.leadershipExperiences;
                break;
        }
    }

    getExperiencesJSON();


    React.useEffect(() => {

        console.log("Experiences in UseEffect: ", experiencesJSON);
        // try {
        setTitleA(experiencesJSON.experiences[0].title);
        setTitleB(experiencesJSON.experiences[1].title);
        setTitleC(experiencesJSON.experiences[2].title);

        setSubtextA(experiencesJSON.experiences[0].subtext);
        setSubtextB(experiencesJSON.experiences[1].subtext);
        setSubtextC(experiencesJSON.experiences[2].subtext);

        setTextSectionA(experiencesJSON.experiences[0].textSection);
        setTextSectionB(experiencesJSON.experiences[1].textSection);
        setTextSectionC(experiencesJSON.experiences[2].textSection);

        setDescription(experiencesJSON.description);
        // }
        // catch (e) {
        //     console.log("Error Loading Experiences: ", experiencesJSON)
        // }

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
            experiences: [
                {
                    title: titleA,
                    subtext: subtextA,
                    textSection: textSectionA,
                    description: "",
                },
                {
                    title: titleB,
                    subtext: subtextB,
                    textSection: textSectionB,
                    description: "",
                },
                {
                    title: titleC,
                    subtext: subtextC,
                    textSection: textSectionC,
                    description: "",
                },
            ],
            description: description,
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
                <DialogTitle sx={{backgroundColor: "#c27e00", color: "white"}}>Edit Your Experiences Data</DialogTitle>
                <DialogContent sx={{backgroundColor: "white", overflowY: "hidden", color: "white"}}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={titleA}
                        onChange={(e) => {
                            setTitleA(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Subtext"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={subtextA}
                        onChange={(e) => {
                            setSubtextA(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Text Section"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={textSectionA}
                        onChange={(e) => {
                            setTextSectionA(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Second Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={titleB}
                        onChange={(e) => {
                            setTitleB(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Second Subtext"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={subtextB}
                        onChange={(e) => {
                            setSubtextB(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Second Text Section"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={textSectionB}
                        onChange={(e) => {
                            setTextSectionB(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Third Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={titleC}
                        onChange={(e) => {
                            setTitleC(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Third Subtext"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={subtextC}
                        onChange={(e) => {
                            setSubtextC(e.target.value);
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Third Text Section"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={textSectionC}
                        onChange={(e) => {
                            setTextSectionC(e.target.value);
                        }}
                    />
                                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
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
