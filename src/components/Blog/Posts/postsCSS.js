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
    },
    blogPost: {
        width: '30%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    createPostPage: {
        width: '100%',
        Height: 'calc(100vh - 80px)',
        display: 'grid',
        placeItems: 'center'
    },
    cpContainer: {
        width: '500px',
        height: 'auto',
        padding: '20px',
        backgroundColor: 'black',
        borderRadius: '12px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    },
    inputGp: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        fontSize: '20px'
    },
    button: {
        backgroundColor: 'lightgray',
        marginTop: '10px'
    }
}));

export default useStyles;