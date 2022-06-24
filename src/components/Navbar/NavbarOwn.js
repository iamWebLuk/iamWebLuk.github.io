import 'bootstrap/dist/css/bootstrap.css'
import {Dropdown, DropdownButton, Navbar} from 'react-bootstrap';
import { Button } from '@mui/material';
import './navbar.css'
import InstagramLogo from '../../img/Instagram_logo.png';
import GithubLogo from '../../img/GitHub_Logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import LanguageIcon from '@mui/icons-material/Language';
import CV from '../../CV.pdf'
import GitHubIcon from '@mui/icons-material/GitHub';

import RubiksCube from '../RubiksCube/RubiksCube'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {ButtonGroup, Tooltip, useTheme} from "@material-ui/core";
import Flags from 'country-flag-icons/react/3x2'


function NavbarOwn() {

    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(<ReactCountryFlag countryCode={'AT'} />);
    const [germanDisabled, setGermanDisabled] = useState(false);
    const [englishDisabled, setEnglishDisabled] = useState(true);
    const [dutchDisabled, setDutchDisabled] = useState(false)

    
    let changeLanguage = (sprache) => {
        if (sprache === 'de') {
            setFlag(<ReactCountryFlag countryCode={'AT'} />);
            i18n.changeLanguage('de')
            setGermanDisabled(true);
            setEnglishDisabled(false);
            setDutchDisabled(false);
        } else if (sprache === 'en') {
            setFlag(<ReactCountryFlag countryCode={'GB'} />);
            i18n.changeLanguage('en')
            setEnglishDisabled(true);
            setGermanDisabled(false);
            setDutchDisabled(false);
        } else {
            setFlag(<ReactCountryFlag countryCode={'NL'} />);
            i18n.changeLanguage('nl');
            setDutchDisabled(true);
            setEnglishDisabled(false);
            setGermanDisabled(false);
        }
    }

    return(
        <Router>
        <div className="navbar-background">
            <Routes>



            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand navbar-margin" href="#" style={{color: '#61DAFB'}}>iAmWebLuk</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="navbar-toggler-inner"></div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Route path="/biography">
                            {t("navbar.biography")}
                            {/*<a className="nav-link" href="#biography">{t("navbar.biography")}</a>*/}
                            </Route>
                        </li>
                        <li className="nav-item && NavPadding">
                            {/* So wie es hier ist passt es*/}
                            <Route>
                                <a href="/rubiksCube" className={"nav-item" && "NavLink"}>
                                    {t("navbar.rubiksCube")}
                                </a>
                            </Route>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={ CV } target="_blank">{t("navbar.cv")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascriptIdeas.html">{t("navbar.jsTest")}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Football">{t("navbar.reactTest")}</a>
                        </li>
                        <li className="nav-item && NavPadding">
                            <a href="/rubiksCube" className={"NavLink"}>Rubiks Cube</a>
                        </li>

                    </ul>

                    <Router>
                        <Navbar />
                        <Route path='/rubikscube' component={ RubiksCube } />
                    </Router>
                </div>

                <Dropdown align={{lg: 'start'}} id="dropdown-menu-align-end" style={{marginRight: '20px'}}>
                    <Dropdown.Toggle className='dropdown-button' id="dropdown-basic">
                        <LanguageIcon className='language-icon' style={{fontSize: '1.8em'}}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="start">
                        <Dropdown.Item onClick={() => {changeLanguage("de")}} disabled={germanDisabled}><Flags.DE style={{height:'1.3em', marginRight: '10px'}} />{t('languages.german')} </Dropdown.Item>
                        <Dropdown.Item onClick={() => {changeLanguage("en")}} disabled={englishDisabled}> <Flags.GB style={{height:'1.3em', marginRight: '10px'}} /> {t('languages.english')} </Dropdown.Item>
                        <Dropdown.Item onClick={() => {changeLanguage('nl')}} disabled={dutchDisabled}><Flags.NL style={{height:'1.3em', marginRight: '10px'}} /> {t('languages.dutch')} </Dropdown.Item>
                        {/*<Dropdown.item> <Flags.US title="United States" /></Dropdown.item>*/}
                    </Dropdown.Menu>
                </Dropdown>
                <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                    <li className="nav-item">
                        <Tooltip title={"Instagram"}>
                        <a href="https://www.instagram.com/lukas.weber_/"><img src={ InstagramLogo } width="30"
                                                                               height="30" className="logo-Margin"
                        /></a>
                            </Tooltip>
                        <a href="https://github.com/iamWebLuk"><GitHubIcon className="github-icon" style={{fontSize: '2.2em'}}/>{/*<img src={ GithubLogo } width="30" height="30" alt="" className='logo-Margin'/>*/}</a>
                    </li>
                </ul>
                {/*<Button onClick={() => changeLanguage()} style={{marginLeft:'-15px', fontSize:'1.5em'}}> { flag } </Button>*/}
                {/*<button onClick={() => changeLanguage()}><ReactCountryFlag countryCode={'GB'}  /></button>*/}
            </Navbar>
            </Routes>
        </div>
        </Router>
    );
}

export default NavbarOwn;