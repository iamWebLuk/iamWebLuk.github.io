import useStyles from './starWarsCSS';
import axios from "axios";
import {useEffect, useState} from "react";

export default function StarWars() {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const [auswahl, setAuswahl] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('people');
    const [selectedPerson, setSelectedPerson] = useState('1');
    const [currentNumber, setCurrentNumber] = useState(1);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${selectedCategory}`)
            .then(res => {
                setAuswahl(res.data)
                console.log(res.data + " auswahlasdf")
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${selectedCategory}/${selectedPerson}`)
            .then(res => {
                // console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[selectedCategory, selectedPerson]);

    return (

        <div>

            <h1>Get the infos about:</h1>

            <select defaultValue={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>

                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
            </select>

            <select defaultValue={selectedPerson} onChange={(e) => setSelectedPerson(e.target.value)}>
                {Object.entries(data).map(([key, value], index) => {
                    console.log(auswahl.results?.[index]);
                    return <option key={key} value={index}>{index}</option>
                })};
            </select>

          {Object.entries(data).map(([key, value], index) => {
            return <div key={index}><h6>{`${key.toUpperCase()}: ${value}`}</h6></div>
          })}
      </div>
    );
}