import React, {useState, useEffect} from "react";
import axios from 'axios'
import useStyles from "./LeaguesCSS";

const Leagues = () => {

    const [data, setData] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues')
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
    }, [])

    return (
        <div className={classes.leaguesContainer}>
            {data?.map((league) => (
                <div key={league.id} className={classes.leagueDiv}>
                    <img src={league.logos.light} style={{width: '200px', marginTop: '20px'}} alt="#" />
                    <h4>{league.name}</h4>
                </div>
            ))}
        </div>
    )
}
export default Leagues;