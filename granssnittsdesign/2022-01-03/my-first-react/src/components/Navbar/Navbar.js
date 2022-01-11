import './Navbar.css'
import logo from '../img/green.gif'

function Navbar() {
    function loggain() {
        alert('Kom till mina sidor')
    }

    return (
        <>
            <nav>
                <div className="container-navbar">
                    <section>
                        <button className="dropbtn">Nyheter</button>
                        <button className="dropbtn">Kontakt</button>
                        <div className="dropdown">
                            <button className="dropbtn">Behandling</button>
                            <div className="dropdown-content">
                                <a href="#">Hudvård</a>
                                <a href="#">Fotvård</a>
                                <a href="#">Massage</a>
                                <a href="#">Kurer</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Produkter</button>
                            <div className="dropdown-content">
                                <a href="#">Hudvård</a>
                                <a href="#">Kroppsvård</a>
                                <a href="#">Makeup</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Varumärken</button>
                            <div className="dropdown-content">
                                <a href="#">Maria Åkerberg</a>
                                <a href="#">M Picaut</a>
                                <a href="#">Hjärligt</a>
                            </div>
                        </div>
                    </section>
                    <section className="container-navbar-middle">
                        <label id="search"><input type="text" value="Sök"/></label>
                        <button className="varukorg">Sök</button>
                    </section>
                    <section className="container-navbar-right">
                        <div className="dropdown">
                            <button className="varukorg" onClick="openMenu()">Varukorg
                            </button>
                            <div id="dropdown" className="dropdown-content">
                                <p>Dina produkter</p>
                                <section>
                                    <section>
                                        <button className="button-cart">
                                            Stäng
                                        </button>
                                        <button onClick="pay()" className="button-cart">
                                            Betala
                                        </button>
                                    </section>
                                </section>
                            </div>
                        </div>
                        <button className="varukorg" onClick={loggain}>Logga in</button>
                    </section>
                </div>
                <p className="free-shipping">
                    ✔ Fri frakt vid köp över 499:- ✔ Gåva på köpet
                </p>
            </nav>
        </>
    )
}

export default Navbar