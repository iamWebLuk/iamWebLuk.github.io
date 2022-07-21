import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import ReactCountryFlag from "react-country-flag";
import { Route } from "react-router-dom";
import CV from './../../CV.pdf';
import {Dropdown} from "react-bootstrap";
import LanguageIcon from "@mui/icons-material/Language";
import Flags from "country-flag-icons/react/3x2";
import useStyles from './appBarCSS'
import AuthModal from "../Authentication/AuthModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginPopUp from "../Authentication/LoginPopUp";



const ResponsiveAppBar = () => {

const { t, i18n } = useTranslation();

const pages = [t('navbar.football'),t('navbar.rubiksCube'),t('navbar.cv'), t('navbar.blog'), t('navbar.jsTest'), t('navbar.reactTest')];
const links = ["/football","/rubiksCube", "/cv", "/blog"];

    const classes = useStyles();


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[userName, setUserName] = useState("");

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

    return (
            <AppBar position="static" style={{backgroundColor: '#373A3E'}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="/" className={classes.root}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        className={classes.fontColor}
                    >
                        iAmWebLuk
                    </Typography>
                    </a>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" className={classes.fontColor}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <a href={"/"}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        iAmWebLuk
                    </Typography>
                        </a>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                           <a href={links[index]} className={classes.root}><Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button></a>
                        ))}
                    </Box>

                    {!isLoggedIn ? <AuthModal /> : <LoginPopUp userName={userName}/>}

                    <Tooltip title={t('languages.selectLanguage')}>
                    <Dropdown align={{lg: 'start'}} id="dropdown-menu-align-end" style={{marginRight: '20px', backgroundColor:'#373A3E'}}>
                        <Dropdown.Toggle className='dropdown-button' id="dropdown-basic" style={{backgroundColor:'#373A3E'}}>
                            <LanguageIcon className='language-icon' style={{fontSize: '1.8em'}}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="start">
                            <Dropdown.Item onClick={() => {i18n.changeLanguage('de')}} disabled={i18n.language === 'de'}><Flags.DE style={{height:'1.3em', marginRight: '10px'}} />{t('languages.german')} </Dropdown.Item>
                            <Dropdown.Item onClick={() => {i18n.changeLanguage("en")}} disabled={i18n.language === 'en'}> <Flags.GB style={{height:'1.3em', marginRight: '10px'}} /> {t('languages.english')} </Dropdown.Item>
                            <Dropdown.Item onClick={() => {i18n.changeLanguage('nl')}} disabled={i18n.language === 'nl'}><Flags.NL style={{height:'1.3em', marginRight: '10px'}} /> {t('languages.dutch')} </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Tooltip>
                    <Tooltip title={"GitHub"}>
                    <a href={"https://github.com/iamwebluk"}><GitHubIcon style={{color: 'white'}} fontSize={'medium'}/></a>
                    </Tooltip>
                    <Tooltip title={"Instagram"}>
                    <a href={"https://www.instagram.com/lukas.weber_/"}><InstagramIcon style={{color: 'white', width:'50px'}} fontSize={'medium'}/></a>
                    </Tooltip>
                    </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;