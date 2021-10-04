let number1 = 2
let number2 = 2 * 2 // 4


function addition () {
    return number1 + number2
}

let sum = addition()
console.log('sum', sum)
console.log('addition()=', addition())


function sub() {
    return number1 - number2
}
console.log('sub=', sub())

function mult() {
    return number1 * number2
}
console.log('multi=', mult())

function div() {
    return number1 / number2
}
console.log('div=', div())



function addTwoNumbers (number1, number2) {
    return number1 - number2
}
console.log('addTwoNumbers()=', addTwoNumbers (2,4))

function multi (number1, number2) {
    return number1 * number2
}
console.log('multi()=', multi (number1, number2))

function div (number1, number2) {
    return number1 / number2
}
console.log('div()=', div (number1, number2))