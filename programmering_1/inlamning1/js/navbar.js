
function navbar(){
    return `
    <ul id="navbar">
        <li>Våra Album</li>
        <li>Erbjudanden</li>
        <li>Nyheter</li>
        <li>Topplista</li>
        <li>Julklappar</li>
        <li>Kontakt</li>
    </ul>

    `
}
document.getElementById('nav').innerHTML = navbar()