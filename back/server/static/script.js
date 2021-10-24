canvas = document.getElementById("canvas-area");
ctx = canvas.getContext("2d");

function test() {
    var data = JSON.parse(coordinates);
    console.log(data);
}

setInterval(test, 1000);