import http from './MyApi'

const Alive = () => {
    return http.get('/')
}

const name = (name) => {
    return http.post(`/name/${name}`)
}

const addition = (num1, num2) => {
    return http.post(`/calc/add/${num1} / ${num2}`)
}

const subtraction = (num1, num2) => {
    return http.post(`calc/sub/${num1} / ${num2}`)
}

const multiplication = (num1, num2) => {
    return http.post (`calc/multi/${num1} / ${num2}`)
}

const division = (num1, num2) => {
    return http.post (`calc/div/${num1} / ${num2}`)
}

const fullName = (forname, lastname) =>{
    return http.post (`name/${forname} / ${lastname}`)
}

export default {
    Alive,
    name,
    addition,
    subtraction,
    multiplication,
    division,
    fullName,
}