import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {AppBar, Tab, Tabs} from "@mui/material";
import {useEffect, useState} from "react";
import Signup from "./Signup";
import Login from "./Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Tooltip } from "@material-ui/core";

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

export default function AuthModal() {
    const [open, setOpen] = useState(false);
    const [isAvatar, setIsAvatar] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCoseAvatar = () => {
        setIsAvatar(false);
    }

    const [value, setValue] = useState(0);
    const [setButtonName, setSetButtonName] = useState("Login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                // setIsAvatar(true);
                setUserName(user.email);
            } else {
                setIsLoggedIn(false);
            }
        })
    },)

    const getUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("is logged in")
                setIsLoggedIn(true);
                console.log(isLoggedIn)
                setUserName(user.email);

            } else {
                console.log("is not logged in")
                setIsLoggedIn(false);
                console.log(isLoggedIn)
            }
        })
    }



    return (
        <div>
            <Tooltip title={!isLoggedIn ? "Login" : "Logout"}>
                    <Button variant='contained' onClick={handleOpen}>{!isLoggedIn ? "Login" : userName}</Button>
            </Tooltip>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                      <AppBar position="static" style={{backgroundColor: 'transparent', color:'rgb(109, 102, 102)', width: '400'}}>
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              variant="fullWidth"
                              style={{borderRadius: 10}}
                              >
                          <Tab label="Login" />
                          <Tab label="Sign Up"/>
                          </Tabs>
                      </AppBar>
                        {value === 0 && <Login handleClose={() => handleClose(false)} changeButtonLabel={word => setSetButtonName(word)} />}
                        {value === 1 && <Signup handleClose={() => handleClose(false)} />}
                    </Box>
                </Fade>
            </Modal>

            <Button onClick={getUser}>getUser</Button>
        </div>
    );
}