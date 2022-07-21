import React, { useContext, useState } from 'react';
import {Drawer, Modal, TextField} from "@material-ui/core";
import useStyles from "./profilePageCSS";
import Avatar from "@mui/material/Avatar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {
    getAuth,
    updatePassword,
    deleteUser,
    sendPasswordResetEmail,
    reauthenticateWithCredential,
    EmailAuthProvider } from 'firebase/auth';
import Box from "@mui/material/Box";
import Drawers from "../Drawers";
import CloseButton from "../Buttons/CloseButton/CloseButton";
import OKButton from "../Buttons/OKButton/OKButton";
import UserNameContext from "./../../UserNameContext";


export default function ProfilePage({ username }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '10px',
        height: '200px'
    };

    const classes = useStyles();
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    // const newPassword = getASecureRandomPassword();
    const [open, setOpen] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [password, setPassword] = useState('');

    const email = () => {
       // return username.substring(0, username.lastIndexOf('@')).toUpperCase();
       return username.charAt(0).toUpperCase();
    }

    // const result = await reauthenticateWithCredential(auth.currentUser, credentials);
    // user.reauthenticateWithCredential(credentials);

    const deleteCurrentUser = () => {

        const credentials = EmailAuthProvider.credential(user.email, password);
        reauthenticateWithCredential(user, credentials).then(() => {
            deleteUser(user).then(() => {
                alert("you have deleted your account")
                console.log("User deleted");
                navigate("/");
                window.location.reload();
            }).catch((err) => {
                console.log("You have deleted your account")
                console.log(err)
            })
        })
            .catch((e) => {
                if (password === "") {
                    alert("Enter password")
                }
                console.log(e.message + " wrong password")
            })
    }

    const hallihallo = useContext(UserNameContext);

    return(
        <div>
            {hallihallo}
            Profile Site
            <br />
            {/*<Drawers />*/}
            <div className={classes.email}>
            <Avatar sx={{width: 100, height: 100, bgcolor: "green", fontSize: '50px'}}>{email()}</Avatar>
                <div>Email: {username}</div>
                <TextField
                placeholder={'username'}
                />
                <Button onClick={() => navigate("/settings")}>Settings</Button>
                <Button onClick={() => setOpen(true)}>Delete your account</Button>
            </div>
            {/*<Button onClick={getDisplayName}>displayname</Button>*/}

            {/*<Modal open={open} className={classes.modal}>*/}
            <Modal open={open}>
                <Box sx={style}>
                    <h4 style={{textAlign: 'center', marginTop: '10px'}}>Are you sure?</h4>
                    <TextField onChange={event => setPassword(event.target.value)} placeholder={"Enter Password"}/>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px'}}>
                        <CloseButton handleClose={() => setOpen(false)}/>
                        <OKButton handleClick={() => deleteCurrentUser()} />
                    </div>
                </Box>
            </Modal>

            {/*<Button onClick={() => console.log(credentials + " credentials")}>reidentify</Button>*/}
<Button onClick={() => console.log(user.email)}>click me</Button>
            <Modal open={deleteAccount}>
                <Box sx={style}>
                    <h4 style={{textAlign: 'center', marginTop: '10px'}}>Enter password?</h4>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px'}}>
                        <CloseButton handleClose={() => setDeleteAccount(false)}/>
                        <OKButton handleClick={() => deleteCurrentUser()} />
                        <TextField onChange={event => setPassword(event.target.value)} />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}