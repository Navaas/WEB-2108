// Klass för album som går att köpa
// Skillnad på class och object är att klasser är typade och inte object.
class Album {
    constructor(id, name, image, price) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
    }
}

let data = [
    new Album(
        'one',
        "Five Finger Death Punch - F8",
        "img/fivefingerdeathpunch.JPG",
        179
    ),
    new Album(
        'two',
        "Five Finger Death Punch - GotYour6",
        "img/fivefingerdeathpunch2.JPG",
        179
    ),
    new Album(
        'tree',
        "Hammerfall - Masterpieces",
        "img/hammerfall.JPG",
        169
    ),
    new Album(
        'four',
        "Best Of Nickelback - Vol.1",
        "img/nickelback.JPG",
        169
    ),
    new Album(
        'five',
        "Sabaton - Carolus Rex (swe version)",
        "img/sabaton.JPG",
        159
    ),
    new Album(
        'six',
        "Sabaton - The Last Stand",
        "img/sabaton2.JPG",
        199
    ),
    new Album(
        'seven',
        "The Offspring - Americana",
        "img/theoffspring.JPG",
        139
    ),
    new Album(
        'eight',
        "HR - Hardcore Superstar",
        "img/hardcoresuperstar.JPG",
        149
    )
]

//visar album i html
function showAlbum(album){
    return `
    <article id=albumToBy>
            <img src=${album.image} alt=${album.name} class="imgAlbum" id=${album.image}>
            <p>${album.name}</p>
            <p>Pris: ${album.price}:-</p>
            <button onclick="buttonBye('${album.id}', '${album.name}', '${album.image}', '${album.price}')">Köp</button>
    </article> 
 `;
}

// den loopar alla album och skriver ut i html
let renderAlbums = [];
for (const item of data){
    renderAlbums.push(showAlbum(item))
}
document.getElementById('allAlbums').innerHTML = renderAlbums;

