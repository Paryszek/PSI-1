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
		let distT = 0;
		for (let i = 0; i + 1 < this.visitedCities.length; i++) {
			distT += dist(this.visitedCities[i], this.visitedCities[i + 1]);
		}
		this.setDistance(distT);
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
	return Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));
};

let isBestRoute = (routeOne, routeTwo) => {
	if (routeTwo.visitedCities.length !== 0) {
		routeOne.traveledDistance();
		routeTwo.traveledDistance();
		if (routeOne.distance < routeTwo.distance) {
			console.log(routeOne.distance < routeTwo.distance);
		}
		return routeOne.distance < routeTwo.distance;
	}
}
let func = (route, arrayOfCities) => {
	if(arrayOfCities.length !== 0) {
		for (let i = 0; i < arrayOfCities.length; i++) {
			let justRemoved = arrayOfCities[0].clone();
			arrayOfCities = arrayOfCities.slice(1, arrayOfCities.length);
			let newRoute = route.clone();
			newRoute.visitedCities.unshift(justRemoved);
			func(newRoute, arrayOfCities);
			arrayOfCities.unshift(justRemoved);
		}
	} else {
		if (isBestRoute(route, theBestSolution.clone())) {
			console.log(route.distance < theBestSolution.distance);
			if (route.distance < theBestSolution.distance) {
				console.log(route.distance < theBestSolution.distance);
			}
			theBestSolution = route.clone();
		}
	}
}

for (let i = 0; i < countOfCities; i++) {
	cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
	theBestSolution.visitedCities.push(cities[i]);
}


func(route, cities.slice());



console.log('Najkrotszy dystans: ' + theBestSolution.getDistance());
