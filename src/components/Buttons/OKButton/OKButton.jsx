
import React from 'react';
import useStyles from './okButtonCss'
import { IconButton } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';


export default function OKButton({ handleClick }) {

    const classes = useStyles();

    return (
        <>
            <IconButton onClick={handleClick}>
                <CheckIcon className={classes.okBtn} />
            </IconButton>
        </>
    );
}