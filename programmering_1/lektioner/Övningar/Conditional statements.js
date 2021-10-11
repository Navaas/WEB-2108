console.log('Övningar: if, else, if else')
console.log('Exempel 1')

if (true) {
    greeting = "Hej";
}
console.log(greeting)
console.log('---------------------------------------------------------')

console.log('Exempel 2')

if (false) {
    greeting = "Hej";
}
console.log(greeting)
console.log('---------------------------------------------------------')

console.log('Exempel 3')
let greetingOne = "God dag";
let hour = 17;

if (hour < 18) {
}
console.log(greetingOne);
console.log('---------------------------------------------------------')

console.log('Exempel 4')
if (true) {
    greetingTwo = "Hej";
} else {
    greetingThree = "Hej då";
}
console.log(greetingTwo)
console.log('---------------------------------------------------------')

console.log('Exempel 5')
if (false) {
    greeting = "Hej";
} else {
    greeting = "Hej då";
}
console.log(greeting)
console.log('---------------------------------------------------------')

console.log('Exempel 6')
let greetingThree = "";
let hourTwo = 17;

if (hourTwo < 18) {
    greetingThree = "God dag";
} else {
    greetingThree = "God kväll";
}
console.log(greetingThree)
console.log('---------------------------------------------------------')

console.log('Exempel 7')
let greetingFour = "";
let hourThree = 19;

if (hourThree < 18) {
    greetingFour = "God dag";
} else {
    greetingFour = "God kväll";
}
console.log(greetingFour)
console.log('---------------------------------------------------------')

console.log('Exempel 8')
let greetingFive = "";
let hourFive = 9;

if (hourFive < 10) {
    greetingFive = "God morgon";
} else if (hourFive < 20) {
    greetingFive = "God dag";
} else {
    greetingFive = "God kväll";
}
console.log(greetingFive)
console.log('---------------------------------------------------------')

console.log('Exempel 9')
let greetingSix = "";
let hourSix = 15;

if (hourSix < 10) {
    greetingSix = "God morgon";
} else if (hourSix < 20) {
    greetingSix = "God dag";
} else {
    greetingSix = "God kväll";
}
console.log(greetingSix)
console.log('---------------------------------------------------------')

console.log('Exempel 10')
let greetingSeven = "";
let hourSeven = 21;

if (hour < 10) {
    greetingSeven = "God morgon";
} else if (hourSeven < 20) {
    greetingSeven = "God dag";
} else {
    greetingSeven = "God kväll";
}
console.log(greetingSeven)
console.log('---------------------------------------------------------')

console.log('Övningar; switch, break, default')
console.log('Exempel 11')

let todaysDay = new Date().getDay()
let day = "";

switch (todaysDay) {
    case 0:
        day = "Söndag";
        break;
    case 1:
        day = "Måndag";
        break;
    case 2:
        day = "Tisdag";
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day = "Torsdag";
        break;
    case 5:
        day = "Fredag";
        break;
    case 6:
        day = "Lördag";
}
console.log(day)
console.log('---------------------------------------------------------')

console.log('Exempel 12')
let todaysDayS = 1   // Dagen är satt manuellt till 1 dvs Måndag
let days = "";

switch (todaysDayS) {
    case 0:
        days = "Söndag";
        break;
    case 1:
        days = "Måndag"; // Saknar break så nästa case kommer köras
    case 2:
        days = "Tisdag"; // kommer skrivas ut
        break;
    case 3:
        days = "Onsdag";
        break;
    case 4:
        days = "Torsdag";
        break;
    case 5:
        days = "Fredag";
        break;
    case 6:
        days = "Lördag";
}
console.log(days)
console.log('---------------------------------------------------------')

console.log('Exempel 13, default')
let todaysDayOne = 1   // Dagen är satt manuellt
let dayOne = "";

switch (todaysDayOne) {
    case 0:
        dayOne = "Söndag";
        break;
    case 6:
        dayOne = "Lördag";
        break;
    default:
        dayOne = "Ser fram emot helgen";
}
console.log(dayOne)
console.log('---------------------------------------------------------')

console.log('Exempel 14')
let todaysDayTwo = 1   // Dagen är satt manuellt
let dayTwo = "";

switch (todaysDayTwo) {
    default:
        dayTwo = "Ser fram emot helgen";
        break; // Viktigt att komma ihåg
    case 0:
        dayTwo = "Söndag";
        break;
    case 6:
        dayTwo = "Lördag";
}
console.log(dayTwo)
console.log('---------------------------------------------------------')

console.log('Exempel 15')
let todaysDayThree = 1   // Dagen är satt manuellt
let text = "";

switch (todaysDayThree) {
    case 4:
    case 5:
        text = "Snart är det helg";
        break;
    case 0:
    case 6:
        text = "Det är helg";
        break;
    default:
        text = "Ser fram emot helgen"
}
console.log(text)
console.log('---------------------------------------------------------')

console.log('Exempel 16')
let todaysDayFour = 4   // Dagen är satt manuellt
let textOne = "";

switch (todaysDayFour) {
    case 4:
    case 5:
        textOne = "Snart är det helg";
        break;
    case 0:
    case 6:
        textOne = "Det är helg";
        break;
    default:
        textOne = "Ser fram emot helgen"
}
console.log(text)
console.log('---------------------------------------------------------')

console.log('Exempel 17')
let todaysDayFive = 6   // Dagen är satt manuellt
let textTwo = "";

switch (todaysDayFive) {
    case 4:
    case 5:
        textTwo = "Snart är det helg";
        break;
    case 0:
    case 6:
        textTwo = "Det är helg";
        break;
    default:
        textTwo = "Ser fram emot helgen"
}
console.log(textTwo)
console.log('---------------------------------------------------------')

console.log('Exempel 18')
let textThree = "";

let x = "0";
switch (x) {
    case 0:
        textthree = "Off";
        break;
    case 1:
        textThree = "On";
        break;
    default:
        textThree = "Inget värde hittades";
}
console.log(textThree)
console.log('---------------------------------------------------------')

console.log('Exempel 19')
