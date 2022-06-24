import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    root: {
        textDecoration: "none",
    },
    fontColor: {
        color: "#61DAFB",
        // color: "white",
            '&:hover': {
            color: "white",
            }
    }
}));

export default useStyles;
