import React, {useEffect, useState} from 'react';
import useStyles from './soccerCSS'
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import axios from 'axios'
import axiosFile from "../../axiosFile";
import TeamLogo from "./TeamLogo";

import Arsenal from './../../img/Premiere League/Arsenal_Logo.jpg';
import AstonVilla from './../../img/Premiere League/AstonVilla_Logo.png';
import BrentFord from './../../img/Premiere League/Brentford_Logo.png';
import Brighton from './../../img/Premiere League/Brighton&HoveAlbion_Logo.png';
import Burnley from './../../img/Premiere League/Burnley_Logo.png';
import Chelsea from './../../img/Premiere League/Chelsea_Logo.jpg';
import CrystalPalace from './../../img/Premiere League/CrystalPalace_Logo.png';
import Everton from './../../img/Premiere League/Everton_Logo.png';
import LeedsUtd from './../../img/Premiere League/LeedsUnited_Logo.png';
import LeicesterCity from './../../img/Premiere League/LeicesterCity_Logo.png';
import Liverpool from './../../img/Premiere League/Liverpool_Logo.png';
import ManCity from '../../img/Premiere League/ManchesterCity_Logo.png';
import ManUtd from './../../img/Premiere League/ManchesterUnited_Logo.jpg';
import Newcastle from './../../img/Premiere League/Newcastle_Logo.png';
import Norwich from './../../img/Premiere League/Norwich_Logo.png'
import Southampton from './../../img/Premiere League/Southampton_Logo.png';
import Tottenham from './../../img/Premiere League/Tottenham_Logo.jpg';
import Watford from './../../img/Premiere League/Watford_Logo.png';
import WestHam from './../../img/Premiere League/WestHam_Logo.png';
import Wolverhampton from '../../img/Premiere League/Wolverhampton_Logo.png';
import AppBar from "../AppBar/AppBar";
import {useTranslation} from "react-i18next";
import axios from "axios";


export default function Soccer() {


    const links = [
        "https://www.arsenal.com/",
        "https://www.avfc.co.uk/",
        "https://www.brentfordfc.com/",
        "https://www.brightonandhovealbion.com/",
        "https://www.burnleyfootballclub.com/",
        "https://www.chelseafc.com/en",
        "https://www.cpfc.co.uk/",
        "https://www.evertonfc.com/home",
        "https://www.leedsunited.com/",
        "https://www.lcfc.com/",
        "https://www.liverpoolfc.com/",
        "https://www.mancity.com/",
        "https://www.manutd.com/",
        "https://www.nufc.co.uk/",
        "https://www.sufc.co.uk/",
        "https://www.southamptonfc.com/",
        "https://www.tottenhamhotspur.com/",
        "https://www.watfordfc.com/",
        "https://www.whufc.com/",
        "https://www.wolves.co.uk/",
    ];

    const logos = [
        Arsenal,
        AstonVilla,
        BrentFord,
        Brighton,
        Burnley,
        Chelsea,
        CrystalPalace,
        Everton,
        LeedsUtd,
        LeicesterCity,
        Liverpool,
        ManCity,
        ManUtd,
        Newcastle,
        Norwich,
        Southampton,
        Tottenham,
        Watford,
        WestHam,
        Wolverhampton];

    const classes = useStyles();
    const {t} = useTranslation();

    const apiKey = 'e8d80c94721241df8fce83e61e5cbac7';
    const baseURL = 'https://api.football-data.org'
    const url = '/v2/competitions/CL/matches'
    // const fullURL = 'https://api.football-data.org/v2/competitions/CL/matches'

    const [data, setData] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axiosFile.get('https://api.football-data.org/v2/competitions/CL/matches')
    //             if (response && response.data) {
    //                 setData(response.data)
    //             }
    //         } catch (err) {
    //             if (err.response) {
    //                 // not in the 200 range
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`)
    //             }
    //         }
    //     }
    //     fetchPosts();
    // }, []);

    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues')
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
            })
    }, [])

    //TODO
    // football-data.org
    // API KEY
    // e8d80c94721241df8fce83e61e5cbac7

    //TODO
    // request for champions league
    // https://api.football-data.org/v2/competitions/CL/matches

    console.log(1)
    console.log(2)
    console.log(3)

    console.log(data)
    console.log("abc")

    return (
        <div>
            <AppBar />
            <Button onClick={() => {
                console.log()
            }}>abc</Button>
            <div style={{marginLeft: '30px', marginRight: '30px'}}>
                <Grid container item style={{marginRight: '20px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                        {/*{logos.map((value, index) => {*/}
                        {/*    return <TeamLogo image={value} link={links[index]}/>*/}
                        {/*})}*/}
                        {/*{data.map((value, index) => {*/}
                        {/*    return {value.data.}*/}
                        {/*})}*/}
                    </div>
                </Grid>
            </div>
            <Accordion style={{backgroundColor: '#E7EBF0'}} className={classes.headerBorder}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant={"h5"} component={"h5"}>
                        {t('soccer.countrys')}
                    </Typography>
                </AccordionSummary>
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={classes.headerBorder}>
                        <Typography>
                            {t('soccer.england')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{borderTop: '1px solid rgba(0,0,0,0.25'}}>
                        <Typography variant={'body2'} className={classes.submenu}>
                            Premiere League
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{borderTop: '1px solid rgba(0,0,0,0.25'}}>
                        <Typography variant={'body2'} className={classes.submenu}>
                            Championship
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails style={{borderTop: '1px solid rgba(0,0,0,0.25'}}>
                        <Typography variant={'body2'} className={classes.submenu}>
                            Football League One
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={classes.headerBorder}>
                        <Typography>
                            {t('soccer.austria')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{borderTop: '1px solid rgba(0,0,0,0.25'}}>
                        <Typography variant={'body2'} className={classes.submenu}>
                            1. Bundesliga
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography variant={'body2'} className={classes.submenu}>
                            2. Bundesliga
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography variant={'body2'} className={classes.submenu}>
                            Regionalliga
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={classes.headerBorder}>
                        <Typography>
                            {t('soccer.germany')}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{borderTop: '1px solid rgba(0,0,0,0.25'}}>
                        <Typography variant={'body2'} className={classes.submenu}>
                            1. Bundesliga
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography variant={'body2'} className={classes.submenu}>
                            2. Bundesliga
                        </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Typography variant={'body2'} className={classes.submenu}>
                            3. Liga
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Accordion>
            {Object.keys(data).map((data, index) => {
                return <div>
                    <h1>{data.id}</h1>
                </div>
            })}

        </div>
    );
}