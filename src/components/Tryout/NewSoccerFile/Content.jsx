import { makeStyles } from '@material-ui/core';
import {useState} from "react";
import Leagues from './Leagues.jsx'
import Standings from './Standings.jsx'
import {useTranslation} from "react-i18next";
import AppBar from "../../AppBar/AppBar";

const useStyles = makeStyles((active) => ({
    closeBtn: {
        borderRadius: '10px',
        cursor: 'pointer',
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        border: '1px gray solid'
    },

    tabs: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'

    },
    contentContainer: {
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
    }
}));


export default function Content() {

    const {t} = useTranslation();
    const [active, setActive] = useState(true);
    const classes = useStyles(active);

    return(
        <div className={classes.contentContainer}>
            <div className={classes.tabs}>
                <div style={{backgroundColor: active ? 'green' : 'white', color: active ? 'white' : 'black'}} className={classes.closeBtn} onClick={() => {setActive(true)}}>
                    <h2>{t('footballContent.league')}</h2>
                </div>
                <div style={{backgroundColor: !active ? 'green' : 'white', color: !active ? 'white' : 'black'}} className={classes.closeBtn} onClick={() => setActive(false)}>
                    <h2>{t('footballContent.standings')}</h2>
                </div>
            </div>
            {active ? <Leagues /> : <Standings />}
        </div>
    )
}