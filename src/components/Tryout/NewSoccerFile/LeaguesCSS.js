import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((active) => ({
    closeBtn: {
        borderRadius: '10px',
        cursor: 'pointer',
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        border: '1px gray solid',
    },
    leaguesContainer: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        justifyItems: 'center',
    },
    leagueDiv: {
        width: '200px',
        '&:hover': {
            transform: 'scale(1.1)'
        },
    },
}))

export default useStyles;