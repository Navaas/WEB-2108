let data = [
    {
        name: "Five Finger Death Punch - F8",
        image: "img/fivefingerdeathpunch.JPG",
        price: 179
    },
    {
        name: "Five Finger Death Punch - GotYour6",
        image: "img/fivefingerdeathpunch2.JPG",
        price: 179
    },
    {
        name: "Hammerfall - Masterpieces",
        image: "img/hammerfall.JPG",
        price: 169
    },
    {
        name: "Best Of Nickelback - Vol.1",
        image: "img/nickelback.JPG",
        price: 169
    },
    {
        name: "Sabaton - Carolus Rex (swe version)",
        image: "img/sabaton.JPG",
        price: 159
    },
    {
        name: "Sabaton - The Last Stand",
        image: "img/sabaton2.JPG",
        price: 199
    },
    {
        name: "The Offspring - Americana",
        image: "img/theoffspring.JPG",
        price: 139
    },
    {
        name: "HR - Hardcore Superstar",
        image: "img/hardcoresuperstar.JPG",
        price: 149
    }
]

function showAlbum(data){
    return `
    <article id=albumToBy>
            <img src=${data.image} alt=${data} class="imgAlbum" id=${data}>
            <p>${data.name}</p>
            <p>Pris: ${data.price}:-</p>
            <button('${data.name}','${data.image}', ${data.price})">Köp</button>
    </article> 
 `;
}

let renderAlbums = [];

for (let i = 0; i < data.length; i++) {
    renderAlbums.push(showAlbum(data[i]))
}
document.getElementById('allAlbums').innerHTML = renderAlbums;

/* Till Kundkorg */

function addAlbumToCard(){
    return `
    <article id=albumToBy>
            <img src=${data.image} alt=${data} class="imgAlbum" id=${data}>
            <p>${data.name}</p>
            <p>Pris: ${data.price}:-</p>
            <button('${data.name}','${data.image}', ${data.price})">Köp</button>
    </article> 
 `;
}