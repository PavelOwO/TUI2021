canvas = document.getElementById("canvas-area");
ctx = canvas.getContext("2d");

await fetch('file.json')
    .then(response => response.json())
    .then(jsonResponse => console.log(jsonResponse))

// setInterval(test, 1000);