class City {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
class Route {
    constructor () {
        this.distance = 0;
        this.visitedCities = []
    }
    addDistance (value) {
        this.distance += value;
    }
    getDistance () {
        return this.distance;
    }
	traveledDistance () {
		// console.log(this.visitedCities);
		for (let i = 0; i + 1 < this.visitedCities.length; i++) {
			this.addDistance(dist(this.visitedCities[i], this.visitedCities[i + 1]));
		}
	}
}
let cities = [];
let countOfCities = 10;
let theBestSolution = new Route();
let route = new Route();

let dist = (cityA, cityB) => Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));

let isBestRoute = (routeOne, routeTwo) => {
	routeOne.traveledDistance();
	routeTwo.traveledDistance();
	if (routeOne.distance < routeTwo.distance) {
		console.log(routeOne.distance);
	}
	return routeOne.distance < routeTwo.distance;
}
let func = (route, arrayOfCities) => {
	if(arrayOfCities.length !== 0) {
		for (let i = 0; i < arrayOfCities.length; i++) {
			let justRemoved = new City();
			justRemoved = arrayOfCities.shift();
			let newRoute = new Route();
			newRoute.distance = route.distance;
			newRoute.visitedCities = route.visitedCities;
			newRoute.visitedCities.push(justRemoved);
			func(newRoute, arrayOfCities);
			arrayOfCities.push(justRemoved);
		}
	} else {
		if(isBestRoute(route, theBestSolution)) {
			theBestSolution = route;
		}
	}
}

for (let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
}

func(route, cities.slice());



console.log('Najkrotszy dystans: ' + theBestSolution.getDistance());
