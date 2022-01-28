import './Header.css'
import Logo from '../../utils/global/image/green.gif'
import Cart from "../cart/Cart";


export default function Header() {
    return (
        <header>
            <div className='grid-container'>
                <section className='section-logo'>
                    <img className='img-logo' src={Logo} alt="logo"/>
                </section>
                <section className='section-search'>
                    <input type='search'
                           placeholder='Sök produkt'
                           onChange={(event) => (event.target.value)}/>
                </section>
                <section className='section-cart'>
                    <Cart/>
                </section>
            </div>
        </header>
    )
}