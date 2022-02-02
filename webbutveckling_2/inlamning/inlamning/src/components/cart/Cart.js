import css from './Cart.css'
import cart from '../../utils/global/image/cart.png'
import {useState} from "react";
import Card from "../card/Card";

export default function Cart() {

    const [isOpen, setIsOpen] = useState(false);
    let productsCart = []

    function pay() {
        alert('Tack för din betalning')
    }

    function addToCart(id, name, image, price) {

    }

    function CartList({test}) {
        return (
            <>
                {
                    if (test !== undifiend)
                        {
                        test.map((user, index) => {
                        return (
                        <Card key={index}
                        id={test[index].id}
                        image={test[index].image}
                        name={test[index].name}
                        price={test[index].price}/>
                        )
                    })
                }}
                }
            </>
        )
    }

    return (
        <>
            <div className='dropdown'>
                <button onClick={() => setIsOpen(!isOpen)} className='buttonCartImg'><img className='imageCart'
                                                                                          src={cart} alt="varukorg"/>
                </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='dropdownButton'>Varukorg</button>
            {isOpen === true ? (
                <div className='dropdownContent'>
                    <p>Dina produkter</p>
                    <section>
                        <article id="allAddedAlbums">
                            {CartList(productsCart)}
                        </article>
                        <article id="totalSumOfAddedAlbums">
                        </article>
                        <article id="totalQuantityOfAddedAlbums">
                        </article>
                        <article id="totalShippingOfAddedAlbums">
                        </article>
                        <section>
                            <button onClick={() => setIsOpen(false)}>
                                X
                            </button>
                            <button onClick={pay}>
                                Betala
                            </button>
                        </section>
                    </section>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}