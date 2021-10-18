const name = 'map.js';

var canvas = document.getElementById('canvas-area');
var ctx = canvas.getContext('2d');

// СВЯТЫЕ СТРОКИ ПАВЛА I и ИВАНА II
var json = JSON.parse(await fetch   ("../../../config.json")
  .then(response => response.text())
  .then(text => text));
// СВЯТЫЕ СТРОКИ ПАВЛА I и ИВАНА II


var cars_amount = 0;
var cars = [];
var roads = [];
var lines = [];
var crossroads = [];

var line_width = 15;
var car_width = 10;

function getMap() {
    crossroads = json["crossroad_param"];
    lines = json["roads_param"];
    cars = json["cars_param"];
}

function getRoads() {
    var used = [];
    for(var i = 0; i < lines.length; i++) {
        used[i] = false;
    }
    for(var i = 0; i < lines.length; i++) {
        if(used[i] == false) {
            used[i] == true
        }
        else {
            continue;
        }
        for(var j = i + 1; j < lines.length; j++) {

        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCrossroads();
    drawRoads();
    drawCars();
}

function drawCar(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, car_width, car_width);
}

function drawCrossroad(x, y, n) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * line_width * 2, y * line_width * 2, line_width * 2, line_width * 2);
}

function drawRoad(crossroad_1, crossroad_2) {
    // ctx.fillStyle = "blue";
    // var cr1 = {x: crossroads[crossroad_1].x, y: crossroads[crossroad_1].y};
    // var cr2 = {x: crossroads[crossroad_2].x, y: crossroads[crossroad_2].y};

    // var road_length = 2 * line_width;
    // var road_width = 2 * line_width;
    // var rx = cr1.x;
    // var ry = cr1.y;

    // if(cr1.x == cr2.x) {
    //     road_width = Math.abs(cr1.y - cr1.y) - 2 * line_width;
    //     ry += 2 * line_width;
    // }
    // else {
    //     road_length = Math.abs(cr1.x - cr1.x);
    //     rx += 2 * line_width;
    // }
    // ctx.fillRect(rx * line_width, ry * line_width, road_length * line_width, road_width * line_width);

}

function drawCars() {
    for(var i = 0; i < cars.length; i++) {
        drawCar(cars[i].x, cars[i].y);
    }
}

function drawCrossroads() {
    for(var i = 0; i < crossroads.length; i++) {
        drawCrossroad(crossroads[i].x, crossroads[i].y, i)
    }

}

function drawRoads() {
    // for(var i = 0; i < roads.length; i++){
    //     drawRoad(roads[i].crossroad_start - 1, roads[i].crossroad_finish - 1)
    // }
}

function mapMain() {
    getMap();
    getRoads();
    draw();
}

export default mapMain;