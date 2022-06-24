import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function LeagueButton({ changeLeague }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedLeague, setSelectedLeague] = useState('English Premiere League')
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (props) => {
        setAnchorEl(null);
        setSelectedLeague(props)
        changeLeague(props)
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {selectedLeague}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem value="arg.1" onClick={() => handleClose('Argentine Liga Profesional de Fútbol')}>Argentine Liga Profesional de Fútbol</MenuItem>
                <MenuItem value="aus.1" onClick={() => handleClose('Australian A-League')}>Australian A-League</MenuItem>
                <MenuItem value="bra.1" onClick={() => handleClose('Brazilian Serie A')}>Brazilian Serie A</MenuItem>
                <MenuItem value="chn.1" onClick={() => handleClose('Chinese Super League')}>Chinese Super League</MenuItem>
                <MenuItem value="ned.1" onClick={() => handleClose('Dutch Eredivisie')}>Dutch Eredivisie</MenuItem>
                <MenuItem value="eng.1" onClick={() => handleClose('English Premier League')}>English Premier League</MenuItem>
                <MenuItem value="fra.1" onClick={() => handleClose('French Ligue 1')}>French Ligue 1</MenuItem>
                <MenuItem value="ger.1" onClick={() => handleClose('German Bundesliga')}>German Bundesliga</MenuItem>
                <MenuItem value="idn.1" onClick={() => handleClose('Indonesian Liga 1')}>Indonesian Liga 1</MenuItem>
                <MenuItem value="ita.1" onClick={() => handleClose('Italian Serie A')}>Italian Serie A</MenuItem>
                <MenuItem value="jpn.1" onClick={() => handleClose('Japanese J League')}>Japanese J League</MenuItem>
                <MenuItem value="mys1" onClick={() => handleClose('Malaysian Super League')}>Malaysian Super League</MenuItem>
                <MenuItem value="mex.1" onClick={() => handleClose('Mexican Liga BBVA MX')}>Mexican Liga BBVA MX</MenuItem>
                <MenuItem value="por.1" onClick={() => handleClose('Portuguese Liga')}>Portuguese Liga</MenuItem>
                <MenuItem value="rus.1" onClick={() => handleClose('Russian Premier League')}>Russian Premier League</MenuItem>
                <MenuItem value="sgp.1" onClick={() => handleClose('Singaporean Premier League')}>Singaporean Premier League</MenuItem>
                <MenuItem value="esp.1" onClick={() => handleClose('Spanish Primera División')}>Spanish Primera División</MenuItem>
                <MenuItem value="tha.1" onClick={() => handleClose('Thai Premier League')}>Thai Premier League</MenuItem>
                <MenuItem value="tur.1" onClick={() => handleClose('Turkish Super Lig')}>Turkish Super Lig</MenuItem>
                <MenuItem value="uga.1" onClick={() => handleClose('Ugandan Super League')}>Ugandan Super League</MenuItem>
            </StyledMenu>
        </div>
    );
}