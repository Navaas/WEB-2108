console.log('Exempel 1 - array')

let number = [9, 5, 12, 99, 2, 8, 75]
console.log(number)

console.log('-------------------------------------------------')
console.log('Stigande')
let numbers = [9, 5, 12, 99, 2, 8, 75]
numbers.sort(function (a, b){
    return a - b
});
console.log(numbers)

console.log('-------------------------------------------------')
console.log('Fallande')

let numbersOne = [9, 5, 12, 99, 2, 8, 75]
numbersOne.sort(function (a, b){
    return b - a
});
console.log(numbersOne)

console.log('-------------------------------------------------')
console.log('Osorterad')

let numbersTwo = [9, 5, 12, 99, 2, 8, 75]
console.log(numbersTwo)
numbersTwo.sort(function (a, b){
return 0.5 - Math.random()
});
console.log(numbersTwo)

console.log('-------------------------------------------------')
console.log('Högsta')

let numbersThree = [9, 5, 12, 99, 2, 8, 75]
console.log(Math.max.apply(null,numbersThree))

console.log('-------------------------------------------------')
console.log('Lägsta')

let numbersFour= [9, 5, 12, 99, 2, 8, 75]
console.log(Math.min.apply(null, numbersFour))

console.log('-------------------------------------------------')
console.log('Exempel 2 - array')

let num = [5, 99, 2, 75]
console.log(num)
console.log('-------------------------------------------------')
console.log('Stigande')

let numOne = [5, 99, 2, 75]
numOne.sort(function (a, b){
    return a - b
});
console.log(numOne)

console.log('-------------------------------------------------')
console.log('Fallande')
let numTwo = [5, 99, 2, 75]
numTwo.sort(function (a, b){
    return b - a
});
console.log(numTwo)
console.log('-------------------------------------------------')

console.log('Osorterad')
let numThree = [5, 99, 2, 75]
numThree.sort(function (a, b){
    return 0.5 - Math.random()
});
console.log(numThree)

console.log('-------------------------------------------------')
console.log('Högsta')
let numFour = [5, 99, 2, 75]
console.log(Math.max.apply(null, numFour))

console.log('-------------------------------------------------')
console.log('Lägsta')
let numFive = [5, 99, 2, 75]
console.log(Math.min.apply(null, numFive))

console.log('-------------------------------------------------')
console.log('Exempel 3 - array')
let numSix= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
console.log(numSix)

console.log('-------------------------------------------------')
console.log('Stigande')
let numSeven= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
numSeven.sort(function (a, b){
    return a - b
});
console.log(numSeven)

console.log('-------------------------------------------------')
console.log('Fallande')
let numEight= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
numEight.sort(function (a, b){
    return b - a
});
console.log(numEight)

console.log('-------------------------------------------------')
console.log('Osorterad')
let numNine= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
numNine.sort(function (a, b){
    return 0.5 - Math.random()
});
console.log(numNine)

console.log('-------------------------------------------------')
console.log('Högsta')
let numTen= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
console.log(Math.max.apply(null, numTen))

console.log('-------------------------------------------------')
console.log('Lägsta')
let numEleven= [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]
console.log(Math.min.apply(null, numEleven))

console.log('-------------------------------------------------')
console.log('Exempel 4 - array')
let numberOne = [9, 12, 5]
console.log(numberOne)

console.log('-------------------------------------------------')
console.log('Stigande')
let numberTwo = [9, 12, 5]
numberTwo.sort(function (a, b){
    return a - b
});
console.log(numberTwo)

console.log('-------------------------------------------------')
console.log('Fallande')
let numberThree = [9, 12, 5]
numberThree.sort(function (a, b){
    return b - a
});
console.log(numberThree)

console.log('-------------------------------------------------')
console.log('Osorterad')
let numberFour = [9, 12, 5]
numberFour.sort(function (a, b){
    return 0.5 - Math.random
});
console.log(numberFour)

console.log('-------------------------------------------------')
console.log('Högsta')
let numberFive = [9, 12, 5]
console.log(Math.max.apply(null,numberFive))

console.log('-------------------------------------------------')
console.log('Lägsta')
let numberSix = [9, 12, 5]
console.log(Math.min.apply(null, numberSix))