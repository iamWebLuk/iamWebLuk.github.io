import whiteCross from '../../img/RubiksCubePictures/02-white-cross.png';
import dot from '../../img/RubiksCubePictures/Dot.png';
import yellowCross from '../../img/RubiksCubePictures/yellow_Cross.png';
import f2L from '../../img/RubiksCubePictures/F2l-solved.png';
import lShape from '../../img/RubiksCubePictures/L-Shape.png'
import line from '../../img/RubiksCubePictures/Line.png';
import natations from '../../img/RubiksCubePictures/Natations.png';
import rots from '../../img/RubiksCubePictures/rots.png';
import topEdges from '../../img/RubiksCubePictures/Top-edges.png';
import solveWhiteFace from '../../img/RubiksCubePictures/Solved-white-face.png';
import solvedCube from '../../img/RubiksCubePictures/Solved-rubiks-cube.png';

import './rubiksCube.css'
import {useEffect} from "react";
import AppBar from "../AppBar/AppBar";

// var currentEventTarget = event.currentTarget;


function RubiksCube() {

    function getOnHoverEffect(e) {
        e.currentTarget.style.filter = 'brightness(80%)'
        e.currentTarget.style.filter = '0.5s';
        // document.getElementById('rubiks-text1').style.filter = 'brightness(80%)';
        // document.getElementById('rubiks-text1').style.transition = '0.5s';
    }

    function getOffHoverEffect() {
        document.getElementById('rubiks-text1').style.filter = 'brightness(100%)';
        document.getElementById('rubiks-text1').style.transition = '0.5s';
    }


    return(

        <div>
        <link rel="stylesheet" href="./dist/css/main.css" />
            {/*<script src="http://code.jquery.com/jquery.js"></script>*/}
            {/*<script src="bootstrap/js/bootstrap.js"></script>*/}

            <br />
                <h2 style={{paddingTop: '20px', fontFamily: 'Brygada 1918'}}> Rubik's Cube </h2>
                <h3 style={{padding: '20px 50px 20px 50px', fontFamily: 'Brygada 1918', textAlign: 'justify'}}>
                    At this page, you learn how to solve the well-known Rubiks Cube. This tutorial is for absolute beginner
                    or those who want to refresh their lost solving skills. Currently this tutorial only handles the classic
                    3x3 Cube, but it will contain more cubes soon.</h3>


    <div className="container">
        <div className="row">

            <a className="col-sm rubiksCube" id="rubiks-text" style={{backgroundColor: 'red'}}
               href="rubiksCubeTutorial.html#cross">
                <img src={ topEdges } alt="Rubiks Cube" style={{paddingRight: '15%'}} />
                   <span style={{marginTop: '3em'}}>White Cross</span>
            </a>
            <a className="col-sm rubiksCube" id="rubiks-text" style={{backgroundColor: '#E97223'}}
               href="../rubiksCubeTutorial.html#firstLayer">
                <img src={ solveWhiteFace } alt="" style={{paddingRight: '15%'}} />
                <span style={{marginTop: '3em'}}>First Layer</span>
            </a>

            <a className="col-sm rubiksCube" id="rubiks-text" style={{backgroundColor: '#FFFF33'}}
               href="../rubiksCubeTutorial.html#secondLayer">
                <img src={ f2L } alt="" style={{paddingRight: '15%'}} />
                <span style={{marginTop: '3em'}}>Second Layer</span>

            </a>

        </div>
    </div>
    <div className="container">
        <div className="row justify-content-md-center">
            <a className="col-md-4 rubiksCube" id="rubiks-text" style={{backgroundColor: '#00CC00'}}
               href="rubiksCubeTutorial.html#yellowCross">
                <img src={ yellowCross } alt="" style={{paddingRight: '15%'}} />
                <span style={{marginTop: '3em'}}>Yellow Cross</span>
            </a>
            <a className="col-md-4 rubiksCube" id="rubiks-text" style={{backgroundColor: '#0080FF'}}
               href="rubiksCubeTutorial.html#orientLastLayer">
                <img src={ solvedCube } alt="" style={{paddingRight: '15%'}} />
                <span style={{marginTop: '3em'}}>Orient Edges</span>
            </a>
        </div>
    </div>

</div>
    )
}

export default RubiksCube;