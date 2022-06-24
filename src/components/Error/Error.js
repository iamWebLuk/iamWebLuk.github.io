import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import Hannes from "../Hannes/Hannes";

function Error({blogs, errorMesage1, abc}) {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("Off");

    const eror = () => {
        console.log(`hallo ${blogs}`)
        console.log(`this is an ${errorMesage1}`)
        console.log(`this is an ${abc}`)
       return <h2>This is a cool {blogs}</h2>
    }

    const changeFunction = () => {
        setOpen(!open);

        if (!open) {
            document.getElementById("textabc").innerText = "Why are you clicking me? This is an error page"
            setName("Off");
            console.log(name + " name")
            document.getElementById("buttonName").innerText = name;

        } else {
            document.getElementById("textabc").innerText = "";
            setName("On  ");
            console.log(name + " name")
            document.getElementById("buttonName").innerText = name;
        }
    }

    const backToMainPage = () => {
            <Hannes />
    }
    return(
        <div>
        <h2 style={{marginTop: '2em'}}>404 Page not found</h2>
            <Button id="buttonName" onClick={() => {
                changeFunction();
                // document.getElementById("textabc").innerText = "Why are you clicking me? This is an error page"
            }}> { name }</Button>
            <button onClick={eror}>asdf</button>
            <p id="textabc"></p>
            <Button onClick={() => changeFunction()}>Button</Button>
            <br />
            <Button onClick={() => backToMainPage()}>Go back to Main Page</Button>

        </div>


    );
}

export default Error;