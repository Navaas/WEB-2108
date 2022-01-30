import css from './Cart.css'
import cart from '../../utils/global/image/cart.png'
import {useState} from "react";

export default function Cart() {

    const [open, setOpen] = useState(false)

    function pay() {
        alert('Tack för din betalning')
    }

    return (
        <>
            <div className='dropdown'>
                <button className='buttonCartImg'><img className='imageCart' src={cart} alt="varukorg"/></button>
            </div>
            <button onClick={() => setOpen(true)} className='dropdownButton'>Varukorg</button>
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
                        <button>
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