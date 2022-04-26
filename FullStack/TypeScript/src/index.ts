// TUPLE
// enum

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

class Drink {
    color: string
    carbonated: boolean
    sugar: number

    constructor() {
        console.log('I am a drink')
    }
}

type TupleDrink = [string, boolean, number]

const pepsi: TupleDrink = ['brown', true, 40]

pepsi.forEach((item) => console.log(item))

enum Direction {
    NORTH ,
    SOUTH,
    WEST,
    EAST
}

interface Player {
    move: (direction: Direction) => void
}

interface IUsers {
    id: number,
    name: string,
    age: number,
}

const users: IUsers[] = [
    {
        id: 1,
        name: 'Michaela',
        age: 32,
    },
    {
        id: 2,
        name: 'Hugo',
        age: 34,
    },
    {
        id: 3,
        name: 'Filip',
        age: 31,
    },
]

const logger = (user: IUsers) => {
    console.log(`${user.id}, ${user.name} ${user.age}`)
}

users.forEach(logger)

