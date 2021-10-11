console.log('Sortering på år')
let cars = [
    { type: "Polestar", year: 2021 },
    { type: "Koenigsegg", year: 2016 },
    { type: "Volvo", year: 2018 }
];
console.log(cars)
cars.sort(function (a, b){
    return a.year - b.year
});
console.log(cars)
console.log('-------------------------------------------------------------')


let carsOne = [
    { type: "Polestar", year: 2021 },
    { type: "Koenigsegg", year: 2016 },
    { type: "Volvo", year: 2018 }
];
console.log(carsOne)
cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

console.log('-------------------------------------------------------------')
console.log('Sortering på windows')
let houses = [
    { floors: 1, color: "red", windows: 4 },
    { floors: 2, color: "green", windows: 8 },
    { floors: 1, color: "blue", windows: 3 }
];
console.log(houses)
houses.sort(function (a, b){
    return a.windows - b.windows
});
console.log(houses)

console.log('-------------------------------------------------------------')
let housesOne = [
    { floors: 1, color: "red", windows: 4 },
    { floors: 2, color: "green", windows: 8 },
    { floors: 1, color: "blue", windows: 3 }
];
console.log(housesOne)
cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log((housesOne))

console.log('-------------------------------------------------------------')
console.log('Sortering på age')
let persons = [
    { name: "Adam", age: 25, height: 179 },
    { name: "Bengt", age: 23, height: 201 },
    { name: "Cecar", age: 29, height: 163 },
    { name: "David", age: 21, height: 182 }
];
console.log(persons)
persons.sort(function (a, b){
    return a.age - b.age
});
console.log(persons)

let age = [
    { name: "Adam", age: 25, height: 179 },
    { name: "Bengt", age: 23, height: 201 },
    { name: "Cecar", age: 29, height: 163 },
    { name: "David", age: 21, height: 182 }
];
console.log(age)
cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(age)