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
}
let cities = [];
let countOfCities = 10;

let dist = (cityA, cityB) => Math.floor(Math.sqrt(Math.pow(cityA.x - cityB.x, 2) + Math.pow(cityA.y - cityB.y, 2)));

let swap = (array, i, j) => {
    console.log(array);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log(array);
    return array;
}
let howmuch = 0;
let func = (arrayOfCities) => {
    if (howmuch === 5000) {
        return;
    }
    howmuch++;
    let solution = new Route();
    solution.visitedCities.push(arrayOfCities[0]);
    for (let i = 1; i < arrayOfCities.length; i++) {
        solution.addDistance(dist(arrayOfCities[i - 1], arrayOfCities[i]));
    }
    solution.visitedCities.push(arrayOfCities[0]);
    solution.addDistance(dist(arrayOfCities[0], arrayOfCities[arrayOfCities.length - 1]));
    theBestSolution = theBestSolution.getDistance() === 0 ? solution : theBestSolution;
    if (theBestSolution.distance > solution.distance) {
        theBestSolution = solution;
        console.log(theBestSolution.getDistance());
    }
    func(swap(arrayOfCities.slice, Math.floor(Math.random() * 10) % 4 + 1, Math.floor(Math.random() * 10) % 4 + 1));
}

for (let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)));
}

let theBestSolution = new Route();

func(cities.slice());



console.log('Najkrotszy dystans: ' + theBestSolution.getDistance());
