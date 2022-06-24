import React, { useState } from 'react';
import { Divider, ListItemIcon, Menu, MenuItem } from "@material-ui/core";
import { getAuth, signOut } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@material-ui/core/colors";
import IconButton from "@mui/material/IconButton";
import { PersonAdd, Settings } from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout';
import useStyles from "./loginPopUpCSS";
import ProfilePage from "../ProfilePage/ProfilePage";


export default function LoginPopUp({ userName }) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const auth = getAuth();

    const signOutUser = () => {
        signOut(auth).then(() => {
            console.log("Signed out");
        }).catch((err) => {
            console.log(err)
        })
    }

    const firstChar = () => {
       return userName.charAt(0).toUpperCase();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ bgcolor: deepOrange[400] }}>{firstChar()}</Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <a href="/profile">
                <MenuItem>
                    <ListItemIcon onClick={() => <ProfilePage  />}>
                        <Avatar onClick={() => <ProfilePage username={userName} />}/>
                        </ListItemIcon>
                    <div className={classes.a}>Profile</div>
                </MenuItem>
                </a>
                <Divider style={{backgroundColor: 'gray'}}/>
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={signOutUser}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    Log out
                </MenuItem>
            </Menu>
        </div>
    )
}