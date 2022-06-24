import React, {useState} from 'react';
import {Modal, TextField} from "@material-ui/core";
import useStyles from "./profilePageCSS";
import Avatar from "@mui/material/Avatar";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import { getAuth, deleteUser } from 'firebase/auth';
import Box from "@mui/material/Box";
import OKButton from "../Buttons/OKButton/OKButton";


export default function ProfilePage({ username }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '10px',
    };

    const classes = useStyles();
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [open, setOpen] = useState();
    const email = () => {
       // return username.substring(0, username.lastIndexOf('@')).toUpperCase();
       return username.charAt(0).toUpperCase();
    }

    const deleteCurrentUser = () => {
        deleteUser(user).then(() => {
            alert("you have deleted your account")
            console.log("User deleted");
            navigate("/");
        }).catch((err) => {
            console.log("You have deleted your account")
            console.log(err)
        })
    }

    return(
        <div>
            Profile Site
            <br />
            <div className={classes.email}>
            <Avatar sx={{width: 100, height: 100, bgcolor: "green", fontSize: '50px'}}>{email()}</Avatar>
                <div>Email: {username}</div>
                <Button onClick={() => navigate("/settings")}>asdf</Button>
                <Button onClick={() => setOpen(true)}>Delete your account</Button>
            </div>
            <Modal open={open}>
                <Box sx={style}>Are you sure?
                    <Button onClick={deleteCurrentUser}>
                        Yes
                    </Button>
                    <Button onClick={() => setOpen(false)}>
                        NO
                    </Button>
                </Box>
            </Modal>

        </div>
    )
}