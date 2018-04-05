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
		for (let i = 0; i + 1 < this.visitedCities.length; i++) {
			this.addDistance(dist(this.visitedCities[i], this.visitedCities[i + 1]));
		}
		// console.log(this.distance);
	}
	clone () {
		let cloneRoute = new Route();
		cloneRoute.distance = this.distance;
		cloneRoute.visitedCities = this.visitedCities;
		return cloneRoute;
	}
}
let cities = [];
let countOfCities = 5;
let theBestSolution = new Route();
let route = new Route();

let dist = (cityA, cityB) => { 
	// console.log(cityA.x);
	return Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));
};

let isBestRoute = (routeOne, routeTwo) => {
	routeOne.traveledDistance();
	routeTwo.traveledDistance();
	return routeOne.distance < routeTwo.distance;
}
let func = (route, arrayOfCities) => {
	if(arrayOfCities.length !== 0) {
		for (let i = 0; i < arrayOfCities.length; i++) {
			console.log(arrayOfCities[i]);
			let justRemoved = arrayOfCities.splice(0, 1);
			let newRoute = route.clone();
			newRoute.visitedCities.unshift(justRemoved);
			func(newRoute, arrayOfCities);
			arrayOfCities.unshift(justRemoved);
		}
	} else {
		if (isBestRoute(route, theBestSolution)) {
			theBestSolution = route.clone();
		} else if (theBestSolution.getDistance() === 0) {
			theBestSolution = route.clone();
		}
	}
}

for (let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
}

func(route, cities.slice());



console.log('Najkrotszy dystans: ' + theBestSolution.getDistance().toString());
