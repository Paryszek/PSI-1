class City {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

let cities = [];
let countOfCities = 10;
for(let i = 0; i < countOfCities; i++) {
    cities.push(new City(i, Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)));
}

_(cities).forEach((city, index, array) => {
    let solution;
    _(array).forEach((c) => {
        // solution.push({})
    });
});


let theBestSolution = cities.slice();
console.log(theBestSolution);
