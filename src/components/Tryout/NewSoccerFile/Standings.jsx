import React, {useState, useEffect} from "react";
import axios from 'axios'
import useStyles from "./standingsCSS";
import {useTranslation} from "react-i18next";
import {Tooltip, useMediaQuery} from "@material-ui/core";

export default function Standings() {

    const [data, setData] = useState([]);
    const [logo, setLogo] = useState([])
    const [selectedYear, setSelectedYear] = useState('2021');
    const [selectedLeague, setSelectedLeague] = useState('eng.1');
    const [isLaptopView, setLaptopView] = useState(false);

    const laptop = useMediaQuery('(max-width:1400px');
    const classes = useStyles();
    const {t} = useTranslation();


    useEffect(() => {
        axios.get(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
            .then(res => {
                setData(res.data.data.standings)
            })
    }, [selectedLeague, selectedYear])


useEffect(() => {
        if (!laptop) {
            setLaptopView(true)
            console.log(isLaptopView + " laptop")
        } else {
            setLaptopView(false);
            console.log(isLaptopView + " lapop")
        }
    }, [laptop])

    return (
        <div className={classes.table}>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
            {logo.map((logo) => {
                   return <img src={logo.team.logos[0].href} className={classes.smallLogo} style={{float: 'left'}}/>

            })}
            </div>
            <div>
            <select
                name="select-league"
                id="select-league"
                defaultValue={selectedLeague}
                onChange={(e) => setSelectedLeague(e.target.value)}
                style={{borderRadius: '2px'}}
            >
                <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
                <option value="aus.1">Australian A-League</option>
                <option value="bra.1">Brazilian Serie A</option>
                <option value="chn.1">Chinese Super League</option>
                <option value="ned.1">Dutch Eredivisie</option>
                <option value="eng.1">English Premier League</option>
                <option value="fra.1">French Ligue 1</option>
                <option value="ger.1">German Bundesliga</option>
                <option value="idn.1">Indonesian Liga 1</option>
                <option value="ita.1">Italian Serie A</option>
                <option value="jpn.1">Japanese J League</option>
                <option value="mys1">Malaysian Super League</option>
                <option value="mex.1">Mexican Liga BBVA MX</option>
                <option value="por.1">Portuguese Liga</option>
                <option value="rus.1">Russian Premier League</option>
                <option value="sgp.1">Singaporean Premier League</option>
                <option value="esp.1">Spanish Primera División</option>
                <option value="tha.1">Thai Premier League</option>
                <option value="tur.1">Turkish Super Lig</option>
                <option value="uga.1">Ugandan Super League</option>
            </select>
            <select
                name="select-year"
                id="select-year"
                onChange={(e) => setSelectedYear(e.target.value)}
                defaultValue={selectedYear}
            >
                <option value="2011">2011/12</option>
                <option value="2012">2012/13</option>
                <option value="2013">2013/14</option>
                <option value="2014">2014/15</option>
                <option value="2015">2015/16</option>
                <option value="2016">2016/17</option>
                <option value="2017">2017/18</option>
                <option value="2018">2018/19</option>
                <option value="2019">2019/20</option>
                <option value="2020">2020/21</option>
                <option value="2021">2021/22</option>
            </select>
            </div>
            <div>
                <table className={classes.table}>
                    <tr className={classes.tr}>
                        <th className={classes.th}>{t("table.place")}</th>
                        <th className={classes.th} style={{width: '50px'}}>{t("table.logo")}</th>
                        <th style={{width: '80px'}} className={classes.disablen}>{t("table.team")}</th>
                        <th>{t("table.played")}</th>
                        <th>{t("table.won")}</th>
                        <th>{t("table.draw")}</th>
                        <th>{t("table.lose")}</th>
                        <th className={classes.disablen}>{t("table.goalFor")}</th>
                        <th className={classes.disablen}>{t("table.goalAgainst")}</th>
                        <th>{t("table.goalDifference")}</th>
                        <th>{t("table.points")}</th>
                        </tr>
                        </table>
            {data?.map((data, index) => (
                <div key={data.id} className={classes.leagueDiv}>
                    {/*<img src={league.logos.light} style={{width: '200px', marginTop: '20px'}} alt="#" />*/}
                    {/*<h2 key={data.team.id}>{data.team.shortDisplayName}</h2>*/}
                    <table className={classes.table}>
                        <tr className={classes.tr}>
                            <td className={classes.td} style={{width: '55px'}}>
                                {index + 1}
                            </td>
<Tooltip title={data.team.shortDisplayName} disableHoverListener={isLaptopView}>
                            <td className={classes.td} style={{width: '50px'}}>
                                <img src={data.team.logos[0].href} className={classes.smallLogo} />
                            </td>
    </Tooltip>
                            <td className={classes.disablen} style={{width: '150px'}}>
                                {data.team.shortDisplayName}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[3].displayValue}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[0].displayValue}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[2].displayValue}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[1].displayValue}
                            </td>
                            <td className={classes.disablen} style={{width: '80px'}}>
                                {data.stats[4].displayValue}
                            </td>
                            <td className={classes.disablen} style={{width: '80px'}}>
                                {data.stats[5].displayValue}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[9].displayValue}
                            </td>
                            <td className={classes.td} style={{width: '80px'}}>
                                {data.stats[6].displayValue}
                            </td>
                        </tr>
                        </table>
                </div>
            ))}
            </div>
        </div>
    )
}