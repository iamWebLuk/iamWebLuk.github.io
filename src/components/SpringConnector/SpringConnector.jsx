import axios from 'axios';
import {useEffect, useState} from "react";
import {Button, CircularProgress, TextField} from "@material-ui/core";
import useStyles from "./springConnectorCSS";
import {object} from "prop-types";

export default function SpringConnector() {

const USERS_REST_API_URL = "http://localhost:8080/api/"

    const classes = useStyles();

    const [data,setData] = useState([]);
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [currentData, setCurrentData] = useState('teams');
    const [active, setActive] = useState(true);

    const number = 0;

   useEffect(() => {
       axios.get(USERS_REST_API_URL + currentData)
           .then(res =>  {
               console.log(res.data)
               setData(res.data)
           })
           .catch((err) => {
               console.log(err)
           })
   }, [currentData])

    const sabrina = {...data[0]};
   const sabrina2 = {...data}

    const handleFirstName = (name) => {
       setFirstname(name)
    }

    const handleLastName = (name) => {
       setLastName(name)
    }

    return(
        <div>
            <Button onClick={() => console.log(sabrina2[0])}>click </Button>
            <h1>Tabelle</h1>
            <table className = "table table-striped">
                <thead>
                <tr>
                {
                    Object.keys(sabrina).map( (key, index) => (
                                <td key={index}>{key}</td>
                                ))}
                    </tr>

                </thead>
                <tbody>
                <tr>
                {
                    // data?.map((key, index) => {
                    Object.values(sabrina2[number]).map( (key, index) => (
                        <td key={index}>{key[index]}</td>
                    ))}
                    {/*data?.map(*/}
                    {/*    (user,index) =>*/}
                    {/*        <tr key = {user.id}>*/}
                    {/*            <td> {user.id}</td>*/}
                    {/*            <td> {user.firstName}</td>*/}
                    {/*            <td> {user.lastName}</td>*/}
                    {/*            <td> {user.email}</td>*/}

                                {/*<td> {user.teamName}</td>*/}
                                {/*<td> {user.country}</td>*/}
                                {/*<td> {user.city}</td>*/}

                            </tr>


                </tbody>
            </table>

            <TextField label={"hallo"} onChange={(e) => {handleFirstName(e)}}/>
            <TextField label={"hallo"} onChange={(e) => {handleLastName(e)}}/>

            <div style={{display: 'flex'}}>
            <div onClick={() => {
                setCurrentData('teams')
                setActive(true)
                  console.log("teams")}}
                 className={classes.hoverIt} style={{backgroundColor: active ? 'green' :'white', color: active ? 'white' : 'black'}}><h2>Teams</h2></div>
            <div onClick={() => {setCurrentData('users')
                setActive(false)
                console.log("users")}} className={classes.hoverIt} style={{backgroundColor: !active ? 'green' : 'white', color: !active ? 'white' : 'black'}}><h2>Users</h2></div>
            {/*<CircularProgress color='success'/>*/}
        </div>
        </div>
    )
}