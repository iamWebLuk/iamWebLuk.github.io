import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    hoverIt: {
        cursor: 'pointer',
    },
    activeColor: {
      backgroundColor: 'green',
        color: 'white'
    },

}));

export default useStyles;
