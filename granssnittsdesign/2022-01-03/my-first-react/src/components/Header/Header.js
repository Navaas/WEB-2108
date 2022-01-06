import './Header.css'
import logo from '../img/green.gif'

function Header() {

    return (
        <>
            <header>
                <section className="container-logo">
                    <img src={logo} alt="logo" className="logo" />
                </section>
            </header>
        </>
    )
}

export default Header