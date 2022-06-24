import React from 'react';
import {Input, TextField} from "@material-ui/core";

export default function JavaScriptIdeas() {
//document.getElementById("demo").onclick = changeColor;
    document.getElementById("demo");

    function changeColor() {

        var x = document.getElementById("demo");
        x.style.color = "red"
        x.style.fontSize = "20px"

    }

    function changeColor2() {
        var x = document.getElementById("demo");
        x.style.color = "blue"
        x.style.fontSize = "30px"
    }

    var date = new Date();

    var fullDate = `${date.getUTCDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    console.log(date)
    console.log(fullDate)

    function getDate() {
        var fullDate = date.getUTCDate() + "." +
            (date.getUTCMonth() + 1) + "." +
            date.getFullYear();

        var x = document.getElementById("p1");
        x.innerHTML = fullDate;

        x.style.color = "blue"
        x.style.fontSize = "20px"
        x.style.textShadow = "2px 2px red"

        console.log(fullDate)
        console.log("2")

    }

    function stopWatch() {
        var x = document.getElementById("watch");


    }

    window.onload = function () {
        getDate();
    }


    const Stopwatch = function (elem, options) {

        var timer = createTimer(),
            startButton = createButton("start ", start),
            stopButton = createButton("stop ", stop),
            resetButton = createButton("reset ", reset),
            offset,
            clock,
            interval;

        // default options
        options = options || {};
        options.delay = options.delay || 1;

        // append elements     
        elem.appendChild(timer);
        elem.appendChild(startButton);
        elem.appendChild(stopButton);
        elem.appendChild(resetButton);

        // initialize
        reset();

        // private functions
        function createTimer() {
            return document.createElement("span");
        }

        function createButton(action, handler) {
            var a = document.createElement("a");
            a.href = "#" + action;
            a.innerHTML = action;
            a.addEventListener("click", function (event) {
                handler();
                event.preventDefault();
            });
            return a;
        }

        function start() {
            if (!interval) {
                offset = Date.now();
                interval = setInterval(update, options.delay);
            }
        }

        function stop() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }

        function reset() {
            clock = 0;
            render(0);
        }

        function update() {
            clock += delta();
            render();
        }

        function render() {
            timer.innerHTML = clock / 1000;
        }

        function delta() {
            var now = Date.now(),
                d = now - offset;

            offset = now;
            return d;
        }

        // public API
        this.start = start;
        this.stop = stop;
        this.reset = reset;
    };


    // basic examples
    var elems = document.getElementsByClassName("basic");

    for (var i = 0, len = elems.length; i < len; i++) {
        new Stopwatch(elems[i]);
    }

    function determinante() {
        var a = parseInt(document.getElementById("index0").value)
        var b = parseInt(document.getElementById("index1").value)
        var c = parseInt(document.getElementById("index2").value)
        var d = parseInt(document.getElementById("index3").value)
        var e = parseInt(document.getElementById("index4").value)
        var f = parseInt(document.getElementById("index5").value)
        var g = parseInt(document.getElementById("index6").value)
        var h = parseInt(document.getElementById("index7").value)
        var i = parseInt(document.getElementById("index8").value)

        console.log(a + b)
        var determinante = a * e * i + b * f * g + c * d * h - b * d * i - a * f * h - c * e * g

        //check if all fields are not null or empty
        if (!a || !b || a === '' || b === '' || !c || !d || c === '' || d === '' ||
            !e || !f || e === '' || f === '' || !g || !h || g === '' || h === '' ||
            !i || i === '') {
            alert("Please fill the matrix with numbers")
        } else {
            document.getElementById("matrix").innerHTML = determinante
            document.getElementById("determinanteBtn").style.border = "2px solid black";
            document.getElementById("spurBtn").style.border = "none";
        }
    }

    function spur() {
        var a = parseInt(document.getElementById("index0").value)
        var b = parseInt(document.getElementById("index4").value)
        var c = parseInt(document.getElementById("index8").value)

        if (a !== '' || b !== '' || c !== '') {
            document.getElementById("matrix").innerHTML = a + b + c
            var x = document.getElementById("spurBtn")
            document.getElementById("determinanteBtn").style.border = "none"
            x.style.border = "2px solid black";
        } else {
            alert("Please fill the matrix with numbers")
        }
        if (document.getElementById("matrix").value === NaN) {
            alert("alarm")
        }
        console.log(document.getElementById("matrix").value)
    }

    function emptyFields() {
        var a = parseInt(document.getElementById("index0").value)
        var b = parseInt(document.getElementById("index1").value)
        var c = parseInt(document.getElementById("index2").value)
        var d = parseInt(document.getElementById("index3").value)
        var e = parseInt(document.getElementById("index4").value)
        var f = parseInt(document.getElementById("index5").value)
        var g = parseInt(document.getElementById("index6").value)
        var h = parseInt(document.getElementById("index7").value)
        var i = parseInt(document.getElementById("index8").value)

        var matrix = new Array(a, b, c, d, e, f, g, h, i)

        for (let i = 0; i < matrix.length; i++) {
            console.log("index" + i + " = " + matrix[i])
            if (isNaN(matrix[i])) {
                console.log("in the loop")
                matrix[i].value = "0";
            }
        }
        var lol = new Array("test", "test2");
    }

    function matrix() {
      return(<div><TextField id="outlined-basic" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Input>asdf</Input></div>);
    }

    return(
<div>
    javascript ideas
    {matrix()}
</div>
    );
}