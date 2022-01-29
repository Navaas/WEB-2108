import css from './Cart.css'
import cart from '../../utils/global/image/cart.png'

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
            <div className='dropdown'>
                <button className='buttonCartImg'><img className='imageCart' src={cart} alt="varukorg" onClick={openMenu}/></button>
            </div>
            <button onClick={openMenu} className='dropdownButton'>Varukorg</button>
            <div id='dropdown' className='dropdownContent'>
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