import {Box, Button, TextField} from "@material-ui/core";
import OKButton from "../Buttons/OKButton/OKButton";
import { useState } from "react";
import CloseButton from "../Buttons/CloseButton/CloseButton";
import { auth, provider } from './../../Firebase/config';
import { getAuth, signOut } from 'firebase/auth';
import {signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Visibility } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";

export default function Login({ handleClose, changeButtonLabel }) {

    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [visible, setVisible] = useState(false);

    // const navigate = useNavigate();
    const auth = getAuth();


       const signOutUsers = () => {

            signOut(auth).then(() => {
                console.log("Signed out");
                handleClose();
                changeButtonLabel("Login")
                // navigate('/')
            }).catch((err) => {
                console.log(err)
            })
        }

    const signInUser = () => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("you are now logged in " + email)
                    handleClose();
                    changeButtonLabel(email.toString())
                })
                .catch((err) => {
                    const errorMessage = err.message;
                    alert(errorMessage);
                })
    }

    const handleKeyPress = (e) => {
            if (e.code === 'Enter') {
                signInUser();
            }
    }

    return (
        <Box p={3} style={{display: 'flex', flexDirection:'column', gap: '30px'}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="email"
                label={t('login.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth />
            <TextField
                // error
                variant="outlined"
                type={visible ? "type" : "password"}
                label={t('login.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                autoComplete="off"
            onKeyPress={handleKeyPress}
            InputProps={{endAdornment: (<Visibility onClick={() => setVisible(!visible)} style={{cursor: 'pointer'}}/>)}}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <CloseButton handleClose={handleClose}/>
                <OKButton handleClick={signInUser}/>
            </div>
        </Box>
    )
}
