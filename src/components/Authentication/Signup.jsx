import OKButton from "../Buttons/OKButton/OKButton";
import { useEffect, useState } from "react";
// import {Box, TextField} from "@material-ui/core";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import CloseButton from "../Buttons/CloseButton/CloseButton";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut} from "firebase/auth";
import { Button } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { actionCode } from 'firebase/auth'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../Firebase/firebase'

export default function Signup({ handleClose }) {

    const { t } = useTranslation();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [samePassword, setSamePassword] = useState(false);
    const [visible, setVisible]  = useState(false);
    const [everyhingCorrect, setEverythingCorrect] = useState(false);

    const regex = new RegExp("/^[^\s@]+@[^\s@]+\.[^\s@]+$/");

    useEffect(() => {

        setSamePassword(password === confirmPassword && password.length > 5);
        if (regex.test(email)) {
            console.log("true")
        } else {
            console.log("false")
        }
        if (samePassword !== true || email === undefined) {
          setEverythingCorrect(false)
        }
    },[password, confirmPassword])


    const handleSubmit = async () => {
        console.log(email + " email")
        if (email === undefined || password === undefined || confirmPassword === undefined) {
            console.log("sollte nicht gehen")
        }
    }

        const auth = getAuth();

        const newUser = () => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setEverythingCorrect(true)
                    handleClose();

                    sendEmailVerification(user)
                    .then(() => {
                        let msg = 'An email verification link has been sent to ' + user.email;
                    })

                    signOut(auth).then(() => {
                        console.log("Signed out");
                    }).catch((err) => {
                        console.log(err)
                    })


                })
                .catch((err) => {
                    const errorCode = err.code;
                    const errorMessage = err.message;
                    alert(errorMessage)
                })

        }



    return (
            <Box p={3} style={{display: 'flex', flexDirection:'column', gap: '30px'}}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="email"
                    label={t("login.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth />
                <TextField
                    variant="outlined"
                    type={visible ? "type" : "password"}
                    label={t("login.password")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth />
                <TextField
                    error={!samePassword}
                    variant="outlined"
                    type={visible ? "type" : "password"}
                    label={t("login.confirmPassword")}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    InputProps={{endAdornment: (<Visibility onClick={() => setVisible(!visible)} style={{cursor: 'pointer'}}/>)}}
                    />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <CloseButton handleClose={handleClose}/>
                    <a><Button onClick={newUser} disabled={!samePassword}>Registierung</Button></a>
                </div>
            </Box>
    )
}