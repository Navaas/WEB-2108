//album till varukorgen
class AlbumToBye {
    constructor(id, name, image, price) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.quantitiy = 1
        this.totalSum = price
    }
}

/* Till Kundkorg */
//tom varukorg
let myCart = []

//Lägger till/uppdaterar till varukorgen
function buttonBye(id, name, image, price) {
    let foundInCart = false;
    //for (let i = 0; i < myCart.length; i++) {
    //    if (myCart[i].id == id) {
    //        let item = myCart[i]
    //        item.addOne()
    //        myCart[i] = item
    //    }
    //} = samma sak som den under (men mkt jobbigare)
//går igenom varje objekt i varukorgen, ändrar om den hittar något befintligt i varukorgen
    for (const item of myCart) {
        if(item.id == id) {
            item.quantity += 1
            item.totalSum = item.price * item.quantitiy;
            foundInCart = true;
        }
    }
//lägg till helt nya album i varukorgen (köpa fler album)
    if(foundInCart == false) {
        let newAlbum = new AlbumToBye(id, name, image, price)
        myCart.push(newAlbum)
    }
}

//visar album i varukorg
function showAlbum(album){
    return `
    <article id=albumToBy>
            <img src=${album.image} alt=${album.name} class="imgAlbum" id=${album.image}>
            <p>${album.name}</p>
            <p>Pris: ${album.price}:-</p>
            <input id="quantitiy${album.id}" type="number" onclick="addMore('${album.id}')" value="${album.quantitiy}" />
            <p id="totalSum${album.id}">Total: ${album.totalSum}:-</p>
    </article> 
 `;
}
//visar varukorg
function openMenu() {
    document.getElementById('dropdown')
        .classList.add('show')
// lägger till album i html i korgen
    let renderCartAlbums = [];
    for (const item of myCart){
        renderCartAlbums.push(showAlbum(item))
    }

    document.getElementById('allAddedAlbums').innerHTML = renderCartAlbums
}
//stänger korgen
function closeMenu () {
    document.getElementById('dropdown')
        .classList.remove('show')
}

// adderar eller subtraherar antal och räknar ut slutsumma
function addMore (id) {
    console.log(id)
    let newValue = document.getElementById("quantitiy" + id).value;
    for (const item of myCart) {
        //ToDo: Gör så den tar bort album om det är noll från myCart och från HTML
        // Kolla på delete eller splice för javascript
        // För html kolla på document.getElementById("dropdown").remove();
        // Räkna ut slut summa
         if(item.id == id) {
            item.quantitiy = newValue;
            item.totalSum = item.price * item.quantitiy;
            document.getElementById("totalSum" + id).innerText = "Total: " + item.totalSum + ":-";
        }
    }
}

