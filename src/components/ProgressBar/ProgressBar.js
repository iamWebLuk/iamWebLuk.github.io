import React, {useEffect, useState} from 'react';
import useStorage from "../../Hooks/useStorage";
import {Button, Checkbox} from "@mui/material";
import './progressbar.css'
function ProgressBarOwn() {

    const pushToUseState = () => {
        const userInput = document.getElementById('textFieldInput').value;
        setToDo(toDo => [...toDo, {title:userInput}])
                            
    }

    const handleSubmit = (e) => {
                           e.preventDefault();
                           alert("you have searched for - ")
    }

    const handleKeypress = (e) => {
     document.addEventListener("keypress", function (event) {

     })
    }


    const [toDo, setToDo] = useState([
        {title: "8x T-Shirt", id:1, checked: true},
        {title: "8x Unterwäsche", id:2, checked: true},
        {title: "2x Hose", id:3},
        {title: "1x Jogginhose", id:4, checked: true},
        {title: "2x Chill Shirt", id:5},
        {title: "1x Schuhe", id:6, checked: true},
        {title: "3x Pulli",  id:7, checked: true},
        {title: "1x Jacke", id:8, checked: true},
        {title: "8x Socken", id:9, checked: true},
        {title: "Zahnbürste",  id:10, checked: true},
        {title: "Gel", id:11},
        {title: "Haarspray",  id:12},
        // {title: "handtuch",  id:13},
        {title: "Parfume",  id:14, checked: true},
        {title: "Pincette",  id:15, checked: true},
        {title: "Laufschuhe",  id:16, checked: true},
        {title: "Geschenke Katrin!!!!!",  id:17},
        {title: "Reisepass und Impfpass",  id:18, checked: true},
        {title: "Aufladekabel Laptop u. Handy",  id:19},
        {title: "gute laune",  id:20, checked: true},
        {title: "Katrin",  id:21, checked: true},
        {title: "Tablet",  id:22, checked: true},
    ])

    useEffect(() => {
        const listener = event => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                console.log("Enter key was pressed. Run your function")
            event.preventDefault();
                //call my function();
            }
        }
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, [])


    return(
        // <div className="progress-bar">progress</div>
        <div>
            <div style={{marginTop: '3em'}}>
                <div style={{border: '1px solid #ccc', margin: '0px 100px 0px 100px'}}>
                <h5>Idee</h5>
                <h6>Die Tage die man verreisen will, soll man auswählen können und die sachen werden danach automatisch berechnet</h6>
                </div>
                <div style={{marginTop: '2em'}}></div>
                {toDo.map((list) => (
                    <div key={toDo.id}>

                        <p style={{
                            textAlign: 'justify',
                            marginLeft: '40%',
                            lineHeight: '50%',
                            // marginTop: '10px'
                            marginTop: '-2em'
                        }}>
                        <Checkbox label="My Checkbox"
                                  style={{color:'purple', border: '0px'}}
                        checked={list.checked}>
                        asf
                        </Checkbox> { list.title } </p>


                    </div>
                ))}
            </div>
            <div>
                <input type="textfield"
                       id="textFieldInput"
                       onKeyPress={handleKeypress}
                       onChange={(event) => {
                           document.addEventListener('keydown', function (event) {
                               if (event.keyCode == 13) {
                                   console.log("37");
                               } else {
                                   console.log("else");
                               }
                           })
                       }}
                />
            </div>
            <Button type="submit"
                    style={{backgroundColor: "purple", color: "white", filter: "brightness(1.5)"}}
                    className="enterButton"
                    onClick={() => pushToUseState()}>
                Bestätigen
            </Button>
            <p>Press any key</p>

            <Button onClick={() => {
                alert("left was clicked")
            }}>abc</Button>
        </div>

    );
}

export default ProgressBarOwn;