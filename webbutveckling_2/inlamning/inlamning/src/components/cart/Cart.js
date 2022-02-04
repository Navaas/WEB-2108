import css from './Cart.css'
import cart from '../../utils/global/image/cart.png'
import {useState, useContext} from "react";
import Card from "../card/Card";
import AlbumContext from "../../context/AlbumContext";


export default function Cart() {
    const albumToCart = useContext(AlbumContext);
    const [isOpen, setIsOpen] = useState(false);
    let productsCart = []


    function pay() {
        alert('Tack för din betalning')
    }

    function addToCart(id, name, image, price) {
    }

    function CartList() {
        const albumOnCart = useContext(AlbumContext);
        if (albumToCart!== undefined && albumToCart !== null && albumToCart.length > 0) {
            return (
                <div>
                    {
                        albumOnCart.albumToCart.map((user, index) => {
                            return (
                                <Card key={index}
                                      id={albumOnCart.albumToCart[index].id}
                                      image={albumOnCart.albumToCart[index].image}
                                      name={albumOnCart.albumToCart[index].name}
                                      price={albumOnCart.albumToCart[index].price}/>
                            )
                        })
                    }
                </div>
            )
        }
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