class City {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}
class Route {
    constructor() {
        this.distance = 0;
        this.visitedCities = []
    }
    addDistance(value) {
        this.distance += value;
    }
    getDistance() {
        return this.distance;
    }
}
let cities = [];
let countOfCities = 5;

let dist = (cityA, cityB) => Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));

let shuffle = (array) => {
    array.sort();
}

let func = (arrayOfCities) => {
    let solution = new Route();
    solution.visitedCities.push(arrayOfCities[0]);
    for(let i = 1; i < arrayOfCities.length; i++) {
        solution.addDistance(dist(arrayOfCities[i - 1], arrayOfCities[i]));
    }
    solution.visitedCities.push(arrayOfCities[0]);
    solution.addDistance.push(dist(arrayOfCities[0], arrayOfCities[arrayOfCities.length]));
    theBestSolution = theBestSolution.getDistance() === 0 ? solution : theBestSolution;
    if(theBestSolution.distance > solution.distance) {
        theBestSolution = solution;
    }
    func(shuffle(arrayOfCities.slice()));
}

for (let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
}
let theBestSolution = new Route();

func(cities.slice());
// for(let i = 0; i < cities.length; i++) {
//     let solution = new Route();
//     solution.visitedCities.push(cities[0]);
//     for(let j = i + 1; j < cities.length; j++) {
//         solution.addDistance(dist(cities[j - 1], cities[j]));
//         solution.visitedCities.push(cities[j]);
//     }
//     console.log(solution.visitedCities);
//     theBestSolution = theBestSolution.getDistance() === 0 ? solution : theBestSolution;
//     if(theBestSolution.distance > solution.distance) {
//         theBestSolution = solution;
//     }
// }



console.log('Najkrotszy dystans: ' + theBestSolution.getDistance());
