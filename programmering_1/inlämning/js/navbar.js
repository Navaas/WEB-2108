
function navbar(){
    return `
<section>
    <ul id="nav">
        <li>Våra Album</li>
        <li>Erbjudanden</li>
        <li>Nyheter</li>
        <li>Topplista</li>
        <li>Julklappar</li>
        <li>Kontakt</li>
    </ul>
</section>
    `
}
document.getElementById('navbar').innerHTML = navbar()