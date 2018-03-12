class City {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
class Route {
    constructor(distance, city) {
        this.distance = distance;
        this.visitedCities.push(city);
    }
    clone() {
        return new Route(this.distance).city = this.visitedCities;
    }
}

let dist = (cityA, cityB) => Math.sqrt(Math.pow(cityA.x - cityB.x) + Math.pow(cityA.y - cityB.y));

let cities = [];
let countOfCities = 10;

for(let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)));
}
let theBestSolution = null;
_.forEach(cities, (city, index, array) => {
    let solution = new Route(0, city);
    _.forEach(array, (c) => {
        solution.distance += dist(city, c);
        solution.visitedCities.push(c);
    });
    theBestSolution = !!theBestSolution && theBestSolution.distance < solution.distance  ? solution.clone() : theBestSolution;
    console.log(theBestSolution);
});

// let theBestSolution = cities.slice();
console.log(theBestSolution);
