from math import *
import time
import json

#-----------------------------
deltaT = 10
#-----------------------------

class Car():
    def __init__(self, x = 100, y = 100):
        self.vx = 50
        self.vy = 0
        
        self.ax = 0;
        self.ay = 0;

        self.x = x
        self.y = y
    
    def move(self):
        self.x += self.vx
        self.y += self.vy
    
    def toJSON(self):
        return {"x": self.x, "y": self.y}
    


class Road():
    def __init__(self, crossroadStartNum, crossroadEndNum, laneAmount = 1, level = 1):
        self.start = crossroadStartNum
        self.end = crossroadEndNum
        self.laneAmount = laneAmount
        self.level = level

    def toJSON(self):
        return {"crossroad_start": self.start, "crossroad_finish": self.end, "lane_num": self.laneAmount, "level": self.level}

class Crossroad():
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def toJSON(self):
        return {"x": self.x, "y": self.y}
        
#-----------------------------
roads = []
crossroads = []
cars = []
cars_amount = None
#-----------------------------
        
def movement():
    for car in cars:
        car.move()

def initMap(data):
    for crossroad in data["crossroad_param"]:
        crossroads.append(Crossroad(crossroad["x"], crossroad["y"]))
        
    for road in data["roads_param"]:
        roads.append(Road(road["crossroad_start"], road["crossroad_finish"]))

    for car in data["cars_param"]:
        cars.append(Car(car["x"], car["y"]))

def makeJson():
    dictionary = {}
    
    dictionary["crossroad_param"] = []
    for crossroad in crossroads:
        dictionary["crossroad_param"].append(crossroad.toJSON())
    
    dictionary["roads_param"] = []
    for road in roads:
        dictionary["roads_param"].append(road.toJSON())

    dictionary["cars_param"] = []
    for car in cars:
        dictionary["cars_param"].append(car.toJSON())

    return dictionary


def main():
    while True:
        front_to_back = open("../config.json", "r")
        data = dict(json.load(front_to_back))
        
        initMap(data)
        movement()

        back_to_front = open("../config.json", "w")
        json.dump(makeJson(), back_to_front)

        time.sleep(10)


if __name__ == "__main__":
    main()


"""
Crossroad: (x, y)
Crossroads: [Crossroad, Crossroad, ...]

Length: double,
Level: 0 (base),

Road: (CrossroadStartNum, CrossroadEndNum, LaneAmount, Length, Level)
Roads: [Road, Road, ...]


Car: (x_center, y_center, width, length, velocity, a, angle)
Cars: [Car, Car, ...]
CarFunctions: {
    StraightMove,
    Rotation,
    StopBeforeTrifficLights
}
"""

