import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Gaming from'./components/Gaming/Gaming';
import Hannes from './components/Hannes/Hannes';
import RubiksCube from "./components/RubiksCube/RubiksCube";
import Home from './components/Home/Home';
import Error from './components/Error/Error';

import './components/i18n'
import {useTranslation} from 'react-i18next';
import PictureSite from "./components/PictureSite/PictureSite";
import React, {useEffect, useState} from "react";
import CV from './CV.pdf'
import Content from "./components/Tryout/NewSoccerFile/Content.jsx";
import {createTheme} from "@material-ui/core";
import {ThemeProvider} from "@mui/material";
import Blog from "./components/Blog/Blog";
import Posts from "./components/Blog/Posts/Posts";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import SettingsPage from "./components/Settings/SettingsPage.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Drawers from "./components/Drawers";

function App() {

    const { t, i18n } = useTranslation();
    const [username, setUsername] = useState("");
    const changeLanguage= (language) => {
        i18n.changeLanguage(language);
    }

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
        }
    })

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUsername(user.email)
            } else {
                // alert("You are not logged in")

            }
        })},[])

  return (
      <ThemeProvider theme={darkTheme}>
          <ResponsiveAppBar />
      {/*<Router>*/}
    <div className="App" >
        <Routes>
            {/*<Route exact path="/" element={<Home />} />*/}
            <Route exact path="/" element={<Drawers />} />
            {/*<Route path="/" element={<ProfilePage username={username}/>} />*/}
            <Route path="/rubiksCube" element={ <RubiksCube />} />
            <Route exact path="/#/football" element={<Content />} />
            <Route path="/Gaming" elemnt={<Gaming />} />
            <Route path="/Hannes" element={<Hannes />} />
            <Route path="/picture" element={<PictureSite />} />
            <Route path="/cv" element={ <iframe src={ CV } height="100%" width="100%" style={{position: 'absolute', left: '0'}}></iframe>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/createPost" element={<Posts />} />

            <Route path="/profile" element={<ProfilePage username={username}/>} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Error />} />
            <Route element={<Error blogs={"text"} errorMesage1={"errormessage"} abc={"hallo"} />} />

        </Routes>
    </div>
      {/*</Router>*/}
          </ThemeProvider>
  );
}

export default App;
