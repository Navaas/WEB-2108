import './Cart.css'
import cart from '../utils/global/image/cart.png'

export default function Cart() {

//visar varukorg
    function openMenu() {
        document.getElementById('dropdown')
            .classList.toggle('show')
    }

//stänger korgen
    function closeMenu() {
        document.getElementById('dropdown')
            .classList.toggle('show', false)
    }

    function pay() {
        alert('Tack för din betalning')
    }

    return (
        <>
            <div className="dropdown">
                <img className='image-cart' src={cart} alt="varukorg"/>
            </div>
            <button className="dropdown-button" onClick={openMenu}>Varukorg
            </button>
            <div id="dropdown" className="dropdown-content">
                <p>Dina produkter</p>
                <section>
                    <article id="allAddedAlbums">
                    </article>
                    <article id="totalSumOfAddedAlbums">
                    </article>
                    <article id="totalQuantityOfAddedAlbums">
                    </article>
                    <article id="totalShippingOfAddedAlbums">
                    </article>
                    <section>
                        <button onClick={closeMenu}>
                            X
                        </button>
                        <button onClick={pay}>
                            Betala
                        </button>
                    </section>
                </section>
            </div>


        </>
    )
}