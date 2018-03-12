class City {
    constructor(id, cost) {
        this.id = id;
        this.cost = cost;
    }
}

let cities = new Array(10);
for(let i = 1; i < cities.length; i++) {
    cities.push(new City(i, Math.random() * 10 + 1));
}
let theBestSolution = cities;
console.log(theBestSolution);
