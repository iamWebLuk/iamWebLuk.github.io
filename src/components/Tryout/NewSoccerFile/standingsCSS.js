import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    table: {
        width: '90%',
        marginLeft: '50px',
        marginRight: '50px',
        justifyItems: ' center',
        marginBottom: '0px'
        // border: '1px solid gray',
    },
    leaguesContainer: {
        width: '100%',
        float: 'left',
    },
    smallLogo: {
        width: '30px'
    },
    td: {
        border: '1px solid #dddddd',
        // textAlign: 'left',
        // paddingLeft: '20px',
},
    th: {
        borderBottom: '1px solid #dddddd',
        borderRight: '1px solid #dddddd',
        textAlign: 'center',
        padding: '8px',
        width: '5.5rem'

    },
    tablewidth: {
        width: '50px',
    },
    disablen: {
        width: '100px',
        border: '1px solid #dddddd',
        [theme.breakpoints.down(1300)]: {
            display: 'none'
        }
    }
}))

export default useStyles;