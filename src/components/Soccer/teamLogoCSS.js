import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    hoverIt: {
        cursor: 'pointer',
        "&:hover": {
            // width: '70%',
            // transition: '0.35s',
            // marginBottom: '0px',
            transitionTimingFunction: "ease-in-out",
            transform: 'scale(1.3)'
        }
    },

}));

export default useStyles;
