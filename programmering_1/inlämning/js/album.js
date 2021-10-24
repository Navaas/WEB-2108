let albumsToBy = [
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
        name: "Sabaton - Carolus Rex",
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

//All data i HTML, skrivs ut på sidan.
function ShowAlbum(albumToBy){
    return `
    <section id=albumToBy>
            <img src=${albumToBy.image} alt=${albumToBy} class="img" id=${albumToBy}>
            <p>${albumToBy.name}</p>
            <p>Pris: ${albumToBy.price}:-</p>
            <button onClick="addAlbum('${albumToBy}','${albumToBy.name}','${albumToBy.image}', ${albumToBy.price})">Köp</button>
    </section> 
 `;
}


let renderAlbums = [];

for (let i = 0; i < albumsToBy.length; i++) {
    renderAlbums.push(ShowAlbum(albumsToBy[i]))
}

document.getElementById('allAlbums').innerHTML = renderAlbums;