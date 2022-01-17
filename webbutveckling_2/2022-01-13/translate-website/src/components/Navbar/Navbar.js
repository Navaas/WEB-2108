import './Navbar.css'

export default function Navbar() {
    function button(){
        alert ('Knappen funkar')
    }
    return (
        <nav className='grid-container'>
            <section>

            </section>

            <section>
                <ul className='navbar-links'>
                    <li className='link-items'><a href="#"className='link-item-a active'>Startsida</a></li>
                    <li className='link-items'><a href="#" className='link-item-a'>Våra kurser</a></li>
                    <li className='link-items'><a href="#" className='link-item-a'>Kontakta oss</a></li>
                    <li className='link-items'><a href="#" className='link-item-a'>Om oss</a></li>
                    <li className='link-items'><a href="#" className='link-item-a'>Lia</a></li>
                </ul>
            </section>

            <section>
                <button className='nav-button-black' onClick={button}>Log in</button>
                <button className='nav-button-grey' onClick={button}>Sign up</button>
            </section>
        </nav>
    )
}

