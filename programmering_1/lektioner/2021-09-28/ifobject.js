let users = [
    {
        name: 'John',
        age: 36
    },
    {
        name: 'Aram',
        age: 19,
    },
    {
        name: 'Christoffer',
        age: 26,
    }
]

if (users[1].name.toLowerCase() == 'aRaM'.toLowerCase()){
    console.log('Success')
} else {
    console.log('Fail')
}

for (let i = 0; i <users.length; i++) {
    if (users[1].name.toLowerCase() == 'aRaM'.toLowerCase()){
        console.log('Success at index =', i)
    } else {
        console.log('Fail =', i)
    }
}

console.log('Done')