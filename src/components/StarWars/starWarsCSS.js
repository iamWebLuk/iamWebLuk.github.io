import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    closeBtn: {
        backgroundColor: 'red',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '100px',
        color: 'white',
    },
    headerBorder: {
        // borderTop: '1px solid rgba(0,0,0,0.25)',
        borderBottom: '1px solid rgba(0,0,0,0.25)',
    },
    submenu: {
        marginLeft: "20px;"
    }
}));

export default useStyles;
