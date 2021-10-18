// import createCarButton from './buttons/car-button';
const name = 'mapGenerator';

var canvas = document.getElementById('canvas-area');
var ctx = canvas.getContext('2d');

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }

    if (typeof radius === 'undefined') {
        radius = 5;
    }

    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};

        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();

    if (fill) {
        ctx.fill();
    }

    if (stroke) {
        ctx.stroke();
    }
}

const cellWidth = 20;
const cellHeight = 20;
function drawGrid() {
    ctx.strokeStyle = 'lightgrey';
    ctx.beginPath();

    for (let i = 0; i < canvas.height - cellHeight; i += cellHeight) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    for (let i = 0; i < canvas.width; i += cellWidth) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height - 2 * cellHeight);
        ctx.stroke();
    }

    ctx.rect(10, 10, 100, 100);
    ctx.closePath()
}

function drawCreationMode() {
    ctx.beginPath();

    ctx.fillStyle = "#ffff";
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 4;

    roundRect(ctx, 10, 10, 250, 50, 10, true, true);

    ctx.fillStyle = "#000000";
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Creation Mode", 22, 45);
}

var roadImage = new Image();
roadImage.src = "assets/road.png";

var crossroadImage = new Image();
crossroadImage.src = "assets/crossroad.png";

var carSpawnImage = new Image();
carSpawnImage.src = "assets/car-spawn.png";

var tickImage = new Image();
tickImage.src = "assets/tick.png";

var resetImage = new Image();
resetImage.src = "assets/reset.png";
/*
function drawInstrumentPanel() {
    ctx.beginPath();

    ctx.fillStyle = "#ffff";
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 4;

    roundRect(ctx, -3, 354, 1006, 550, 10, true, true);

    ctx.fillStyle = "#000000";
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("Instrument Panel", 400, 400);

    ctx.font = "15px Comic Sans MS";

    roadImage.onload = function() {
        ctx.drawImage(roadImage, 250, 415, 50, 50 * roadImage.height / roadImage.width);
        ctx.fillText("Road Object", 230, 500);
    };

    crossroadImage.onload = function() {
        ctx.drawImage(crossroadImage, 500, 415, 50, 50 * roadImage.height / roadImage.width);
        ctx.fillText("Crossroad Object", 465, 500);
    };

    carSpawnImage.onload = function() {
        ctx.drawImage(carSpawnImage, 750, 415, 50, 50 * roadImage.height / roadImage.width);
        ctx.fillText("Car Spawn", 740, 500);
    };

    resetImage.onload = function() {
        ctx.drawImage(resetImage, 405, 510, 30, 30 * roadImage.height / roadImage.width);
        ctx.fillText("Reset!", 360, 540);
    }

    tickImage.onload = function() {
        ctx.drawImage(tickImage, 680, 505, 30, 30 * roadImage.height / roadImage.width);
        ctx.fillText("Done!", 640, 540);
    }
}*/

// ЭТО МОЕ АЛЕГ НЕ ТРОГАЙ
function drawTemp() {
    ctx.beginPath()
    ctx.closePath()
}

function createButton() {
    
}

function drawMap() {
    drawGrid();
    drawCreationMode();
    drawTemp();

    //createCarButton()
    //drawInstrumentPanel();
}
// drawMap();
export default drawMap;
// var interval = setInterval(draw, 100);