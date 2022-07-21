import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    email: {
        // backgroundColor: 'red',
        fontSize: '20px',
        flexDirection: 'row',
        display: 'table-cell',
    },

    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '10px',
        height: '400px'
    }
}));

export default useStyles;