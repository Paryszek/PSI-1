class City {
    constructor(id, cost) {
        this.id = id;
        this.cost = cost;
    }
}

let cities = new Array();
let countOfCities = 10;
for(let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.random() * 10 + 1));
}
let theBestSolution = cities.slice();
console.log(theBestSolution);
