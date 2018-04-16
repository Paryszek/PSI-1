var _ = require('lodash');

class City {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
	}
	
	clone () {
		return new City(this.id, this.x, this.y);
	}
}
class Route {
    constructor () {
        this.distance = 0;
        this.visitedCities = []
    }
    setDistance (value) {
        this.distance = value;
    }
    getDistance () {
        return this.distance;
    }
	traveledDistance () {
		let dist = 0;
		for (let i = 0; i + 1 < this.visitedCities.length; i++) {
			dist += countDist(this.visitedCities[i], this.visitedCities[i + 1]);
		}
		this.setDistance(dist);
	}
	clone () {
		let cloneRoute = new Route();
		cloneRoute.distance = this.distance;
		cloneRoute.visitedCities = this.visitedCities;
		return cloneRoute;
	}
}

let cities = [];
let countOfCities = 4;
let theBestSolution = new Route();
let route = new Route();


let countDist = (cityA, cityB) => { 
	return Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));
};

let swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}

let isBestRoute = (routeOne, routeTwo) => {
	if (routeTwo.visitedCities.length !== 0) {
		routeOne.traveledDistance();
		routeTwo.traveledDistance();
		return routeOne.distance < routeTwo.distance;
	}
}
let BruteForce = (index, route, arrayOfCities) => {
	if(index !== countOfCities - 1) {
		for (let i = 0; i < arrayOfCities.length; i++) {
			arrayOfCities = swap(arrayOfCities, index, i);
			route.visitedCities = arrayOfCities.slice();
			let newRoute = route.clone();
			BruteForce(index + 1, newRoute, arrayOfCities);
			arrayOfCities = swap(arrayOfCities, index, i);
		}
	} else {
		if (isBestRoute(route, theBestSolution.clone())) {
			theBestSolution = route.clone();
		}
	}
}

let ClosestNeighbor = (index, arrayOfCities, currentCity) => {
	if (!currentCity) {
		currentCity = arrayOfCities[0];
	}
	if (arrayOfCities.length === countOfCities) {
		theBestSolution.visitedCities.push(arrayOfCities.splice(0, 1)[0]);
	}
	if (arrayOfCities.length === 0) {
		return;
	}
	let dist = countDist(currentCity, arrayOfCities[0]);
	let iterator  = 0;
	_.forEach(arrayOfCities, (city, i) => {
		if (dist > countDist(currentCity, city)) {
			dist = countDist(currentCity, city);
			iterator = i;
		}
		if (i === arrayOfCities.length - 1) {
			theBestSolution.visitedCities.push(arrayOfCities.splice(iterator, 1)[0])
			ClosestNeighbor(0, arrayOfCities, theBestSolution.visitedCities[theBestSolution.visitedCities.length - 1]);
		}
	})
}

// Init the cities
for (let i = 0; i < countOfCities; i++) {
	cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
	theBestSolution.visitedCities.push(cities[i]);
}

BruteForce(0, route.clone(), cities.slice());
console.log('Najkrotszy dystans BruteForce: ' + theBestSolution.getDistance());
theBestSolution = new Route();
ClosestNeighbor(0, cities.slice(), undefined);
theBestSolution.traveledDistance();
console.log('Najkrotszy dystans ClosestNeighbor: ' + theBestSolution.getDistance());
