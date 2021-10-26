//Själva datan
let addedAlbums = [];

//Lägg till album till datan
function addAlbum(albumToAddId, albumToAddName, albumToAddImage, albumToAddPrice) {
    let albumToAdd = {
        id: albumToAddId,
        name: albumToAddName,
        image: albumToAddImage,
        price: albumToAddPrice,
        quantity: 1,
        totalSum: albumToAddPrice
    };
    addedAlbums.push(albumToAdd);
}

function openMenu() {
    //Rendering av album som kan vara album
    let renderAddedAlbums = [];
    for (let i = 0; i < addedAlbums.length; i++) {
        renderAddedAlbums.push(RenderAddedAlbum(addedAlbums[i]))
    }
    document.getElementById('allAddedAlbums').innerHTML = renderAddedAlbums;

    document.getElementById('dropdown')
        .classList.toggle('show')
}

function closeMenu() {
    document.getElementById('dropdown')
        .classList.remove('show')
}

function inputButtom() {
    alert('Testa ett annat sökord')
}

// den ändrar antal i köplistan
function changeQuantity(id) {
    let quantityInput = document.getElementById(id + "quantity").value;
    for (let i = 0; i < addedAlbums.length; i++) {
        if (addedAlbums[i].id == id) {
            addedAlbums[i].quantity = quantityInput;
            addedAlbums[i].totalSum = summaAlbum(addedAlbums[i].price, addedAlbums[i].quantity);
        }
    }
}

function summaAlbum(price, quantity) {
    return price * quantity;
}

// HTML som syns i varukorgen
function RenderAddedAlbum(albumToBy) {
    return `
    <section id=albumToBy>
            <img src=${albumToBy.image} alt=${albumToBy} class="img" id=${albumToBy}>
            <p>${albumToBy.name}</p>
            <p>Pris: ${albumToBy.price}:</p>
            <p>Summa: ${albumToBy.totalSum}</p>
            <input id="${albumToBy}quantity" type="number" name="quantity" step="1" min="1" value="${albumToBy.quantity}" onclick="changeQuantity('${albumToBy}')" required>
    </section> 
 `;
}
