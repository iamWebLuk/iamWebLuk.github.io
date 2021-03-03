//document.getElementById("demo").onclick = changeColor;
document.getElementById("demo");
function changeColor() {

    //$("#overColor").addClass("open").removeClas
   // document.body.style.color = "red"
   // document.body.style.fontSize = "10px"
   var x = document.getElementById("demo");
   x.style.color = "red"
   x.style.fontSize = "20px"
   //document.style.color = "red"
   //document.style.fontSize = "10px"
    
}

function changeColor2() {
   var x = document.getElementById("demo");
   x.style.color = "blue"
   x.style.fontSize = "30px"
}

var date = new Date();

var fullDate = `${date.getUTCDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

console.log(date)
console.log(fullDate)

function getDate() {
    var fullDate = date.getUTCDate() + "." +
    (date.getUTCMonth() + 1) + "." +
    date.getFullYear();

   // var fullDate = `${date.getUTCDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
var x = document.getElementById("p1");
x.innerHTML = fullDate;
//    var x = document.getElementById("p1").innerHTML = fullDate;

    x.style.color = "blue"
    x.style.fontSize = "20px"
    x.style.textShadow = "2px 2px red"  
    
    console.log(fullDate)
    console.log("2")
    console.log
    
}

function stopWatch() {
    var x = document.getElementById("watch");




}

window.onload = function() {
    getDate();
    }



    var Stopwatch = function(elem, options) {
  
        var timer       = createTimer(),
            startButton = createButton("start ", start),
            stopButton  = createButton("stop ", stop),
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
          a.addEventListener("click", function(event) {
            handler();
            event.preventDefault();
          });
          return a;
        }
        
        function start() {
          if (!interval) {
            offset   = Date.now();
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
          timer.innerHTML = clock/1000; 
        }
        
        function delta() {
          var now = Date.now(),
              d   = now - offset;
          
          offset = now;
          return d;
        }
        
        // public API
        this.start  = start;
        this.stop   = stop;
        this.reset  = reset;
      };
      
      
      // basic examples
      var elems = document.getElementsByClassName("basic");
      
      for (var i=0, len=elems.length; i<len; i++) {
        new Stopwatch(elems[i]);
      }
      