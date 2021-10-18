const maxNum = 10           //Detta visa att spelets max nummer är 10

function generateRandomNumber(maxNumber) {
    let correctNumber = Math.floor(Math.random() * maxNumber + 1)  //här väljer den ett spontant nr
    console.log('correctNumber:', correctNumber)            //Detta visar numret som är vi ska gissa.
    return correctNumber
}

let random = generateRandomNumber(maxNum)

// I den här funktion skickar jag min gissning till spelet
function newGuess(){
let input = Number (document.getElementById('my-guess').value)
console.log(input)

let data = verifyGuessEvent(random, input)
document.getElementById('guess-output-text').innerHTML = data[1]
counter()
}

let tries = 1
// I den här funktionen visar antal försök
function counter(){
    let text = Antal försök: ${String(tries)}
        document.getElementById('guess-output-counter').innerHTML = text
    tries++
}

// Här startar vi om spelet
function resetGame() {
    random = generateRandomNumber(maxNum)
    tries = 1
    document.getElementById('guess-output-text').innerHTML = ''
    document.getElementById('guess-output-counter').innerHTML = ''
}

//här har vi texter som skall skrivas ut efter vi har skrivit in ett nr
function verifyGuessEvent(correctNumber, guess) {
    let isGuessCorrect = false
    let text = ''
    console.log(Du gissade på: ${guess})
    if (correctNumber === guess) {
        text = 'Grattis du gissade rätt!'
        isGuessCorrect = true
    } else if (correctNumber > guess) {
        text = 'Du gissade för lågt'
    } else if (correctNumber < guess) {
        text = 'Du gissade för högt'
    } else {
        text = 'Du skrev inte in ett nummer!'
    }
    return [isGuessCorrect, text]
}

Skicka meddelande till @Aram



function findRandomNumber(array) {
    let random = generateRandomNumber(maxNum)
    let maxNum = Math.floor(Math.random() * array.length)
    document.getElementById('randomNumber').innerText = array[index]
    console.log(index)
}
