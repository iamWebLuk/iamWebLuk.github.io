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

export default function YearButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedYear, setSelectedYear] = useState('2021')
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (props) => {
        setAnchorEl(null);
        setSelectedYear(props)
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
                {selectedYear}
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
                <MenuItem onClick={() => handleClose('2011')}>2011</MenuItem>
                <MenuItem value="2012" onClick={() => handleClose('2012')}>2012</MenuItem>
                <MenuItem value="2013" onClick={() => handleClose('2013')}>2013</MenuItem>
                <MenuItem value="2014" onClick={() => handleClose('2014')}>2014</MenuItem>
                <MenuItem value="2015" onClick={() => handleClose('2015')}>2015</MenuItem>
                <MenuItem value="2016" onClick={() => handleClose('2016')}>2016</MenuItem>
                <MenuItem value="2017" onClick={() => handleClose('2017')}>2017</MenuItem>
                <MenuItem value="2018" onClick={() => handleClose('2018')}>2018</MenuItem>
                <MenuItem value="2019" onClick={() => handleClose('2019')}>2019</MenuItem>
                <MenuItem value="2020" onClick={() => handleClose('2020')}>2020</MenuItem>
                <MenuItem value="2021" onClick={() => handleClose('2021')}>2021</MenuItem>
            </StyledMenu>
        </div>
    );
}