import React, {useState} from 'react';
import {Drawer, Modal, TextField} from "@material-ui/core";
import useStyles from "./profilePageCSS";
import Avatar from "@mui/material/Avatar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getAuth, updatePassword, deleteUser, sendPasswordResetEmail } from 'firebase/auth';
import Box from "@mui/material/Box";
import Drawers from "../Drawers";


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
        height: '100px'
    };

    const classes = useStyles();
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    // const newPassword = getASecureRandomPassword();
    const [open, setOpen] = useState(true);
    // const email = () => {
    //    // return username.substring(0, username.lastIndexOf('@')).toUpperCase();
    //    return username.charAt(0).toUpperCase();
    // }

    const deleteCurrentUser = () => {
        deleteUser(user).then(() => {
            alert("you have deleted your account")
            console.log("User deleted");
            navigate("/");
            window.location.reload();
        }).catch((err) => {
            console.log("You have deleted your account")
            console.log(err)
        })
    }
const abc = () => {
    console.log("fire")
    console.log(user)
    const userString = user.toString();
        // sendPasswordResetEmail(auth, userString)
        //     .then(() => {
        //
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
}

    // const getDisplayName = () => {
    //     console.log(user.displayName + " displaname")
    //     console.log(user.email + " email")
    // }


    return(
        <div>
            Profile Site
            <br />
            <Drawers />
            <div className={classes.email}>
            {/*<Avatar sx={{width: 100, height: 100, bgcolor: "green", fontSize: '50px'}}>{email()}</Avatar>*/}
                {/*<div>Email: {username}</div>*/}
                <TextField
                placeholder={'username'}
                />
                <Button onClick={() => navigate("/settings")}>Settings</Button>
                <Button onClick={() => setOpen(true)}>Delete your account</Button>
            </div>
            <div>
                <Button onClick={abc}> reset password</Button>
            </div>
            {/*<Button onClick={getDisplayName}>displayname</Button>*/}

            <Modal open={open}>
                <Box sx={style}>Are you sure?
                    <div style={{justifyContent: 'spaceBetween'}}>
                    <Button onClick={deleteCurrentUser}>
                        Yes
                    </Button>
                    <Button onClick={() => setOpen(false)}>
                        NO
                    </Button>
                    </div>
                </Box>
            </Modal>

        </div>
    )
}