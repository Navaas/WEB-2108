function byeAlbumsContaioner() {
    return `
    <section>
        <img src="img/fivefingerdeathpunch.JPG" alt="five" class="img" id="five">
            <p>Five Finger Death Punch - F8</p>
            <p>Pris: 179:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/fivefingerdeathpunch2.JPG" alt="five1" class="img" id="five1">
            <p>Five Finger Death Punch - GotYour6</p>
            <p>Pris: 179:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/hammerfall.JPG" alt="hammerfall" class="img" id="hammerfall">
            <p>Hammerfall - Masterpieces</p>
            <p>Pris: 169:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/hardcoresuperstar.JPG" alt="hardcoresuperstar" class="img" id="hardcoresuperstar">
            <p>HR - Hardcore Superstar</p>
            <p>Pris: 149:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/nickelback.JPG" alt="nickelback" class="img" id="nickelback">
            <p>Best Of Nickelback - Vol.1</p>
            <p>Pris: 169:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/sabaton.JPG" alt="sabaton" class="img" id="sabaton">
            <p>Sabaton - Carolus Rex </p>
            <p>Pris: 159:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/sabaton2.JPG" alt="sabaton2" class="img" id="sabaton2">
            <p>Sabaton - The Last Stand</p>
            <p>Pris: 199:-</p>
            <button onClick="">Köp</button>
    </section>
        <section>
        <img src="img/theoffspring.JPG" alt="theoffspring" class="img" id="theoffspring">
            <p>The Offspring - Americana</p>
            <p>Pris: 139:-</p>
            <button onClick="">Köp</button>
    </section>
`
}

document.getElementById('allAlbums').innerHTML = byeAlbumsContaioner()