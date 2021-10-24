//import drawMap from './modules/map-generation/mapGenerator.js';
// import mapMain from './modules/map/map.js';

var canvas = document.getElementById('canvas-area');
var ctx = canvas.getContext('2d');

// var file = fetch("../config.json").then(response => response.text()).then(text => text)

var json = JSON.parse(data);

console.log(json);

var cars_amount = 0;
var cars = [];
var roads = [];
var crossroads = [];

var line_width = 15;
var car_width = 10;

function getMap() {
    crossroads = json["crossroad_param"];
    roads = json["roads_param"];
    cars = json["cars_param"];
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRoads();
    drawCrossroads();
    drawCars();
}

function drawCar(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, car_width, car_width);
}

function drawCrossroad(x, y, n) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * line_width, y * line_width, line_width * 2, line_width * 2);
}

function drawRoad(crossroad_1, crossroad_2) {
    ctx.fillStyle = "gray";
    if(crossroad_1 > crossroad_2) {
        [crossroad_1, crossroad_2] = [crossroad_2, crossroad_1]
    }
    var cr1 = {x: crossroads[crossroad_1].x, y: crossroads[crossroad_1].y};
    var cr2 = {x: crossroads[crossroad_2].x, y: crossroads[crossroad_2].y};

    var road_length = 2 * line_width;
    var road_width = 2 * line_width;
    var rx = cr1.x;
    var ry = cr1.y;

    if(cr1.x == cr2.x) {
        road_width = Math.abs(cr2.y - cr1.y) * line_width;
    }
    else if (cr1.y == cr2.y){
        road_length = Math.abs(cr2.x - cr1.x) * line_width;
    }
    else {
        console.log("road beetwin "+crossroad_1+" and "+crossroad_2+" can't be drawen")
        return;
    }
    ctx.fillRect(rx * line_width, ry * line_width, road_length, road_width);

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
    for(var i = 0; i < roads.length; i++){
        drawRoad(roads[i].crossroad_start - 1, roads[i].crossroad_finish - 1)
    }
}

function mapMain() {
    getMap();
    draw();
}

mapMain()
//setInterval(mapMain, 10)
// mapMain();
// drawMap();