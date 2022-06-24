import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    root: {
        textDecoration: "none",
    },
    fontColor: {
        color: "#61DAFB",
        '&:hover': {
            color: "white",
        }
    },
    homePage: {
        width: '100%',
        minHeight: 'calc(100vh - 80px)',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px'
    },
    blogPost: {
        backgroundColor: 'red',
        width: '30%',
        margin: 'auto'
    },
    post: {
        width: '600px',
        height: 'auto',
        maxHeight: '600px',
        backgroundColor: 'rgb(250, 250, 250);',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    },
    postHeader: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        flex: '50%'
    },
    postTextContainer: {
        wordWrap: 'break-word',
        height: 'auto',
        maxHeight: '400px',
        width: '100%',
        overflow: 'hidden',
        overflowY: 'auto'
    },
    authorName: {
        fontWeight: 'bold',
        fontSize: '20px',
        textAlign: 'right',
        marginTop: '20px'
    }
}));

export default useStyles;
