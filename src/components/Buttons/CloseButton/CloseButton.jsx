import React from 'react';
import useStyles from './closeButtonCss'
import { IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';


export default function CloseButton({ handleClose }) {

    const classes = useStyles();

    return (
        <>
            <IconButton onClick={handleClose}>
                <ClearIcon className={classes.closeBtn} />
            </IconButton>
        </>
    );
}