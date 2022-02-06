import css from './Cart.module.css'
import cart from '../../utils/global/image/cart.png'
import {useState, useContext} from "react";
import Card from "../card/Card";
import {AddAlbumToCart, AlbumContext, AlbumInCart} from "../../context/AlbumContext";
import remove from '../../utils/global/image/trash.png';

export default function Cart() {
    const [selectedItem, setSelectedItem] = useContext(AlbumContext);
    const [isOpen, setIsOpen] = useState(false);
    let productsCart = []


    function pay() {
        alert('Tack för din betalning')

        // let testAlbum = new AlbumInCart('one', 'Five Finger Death Punch - F8', 'albumOne', 69);
        // localStorage.setItem('album', testAlbum);
        // console.log(testAlbum);
        // if (testAlbum) {
        //     setSelectedItem(testAlbum)
        // }
        let test =
            {
                albumToCart: [],
                totalAlbumToCart: 0
            };
        console.log(test);

        setSelectedItem(test);
        let testAlbum = new AlbumInCart('one', 'Five Finger Death Punch - F8', 'albumOne', 69);

        let existInCart = false

        // for (const item of selectedItem.albumToCart) {
        //     if (item.id == testAlbum.id) {
        //         item.quantity += 1
        //         item.totalSum = item.price * item.quantity;
        //         existInCart = true;
        //     }
        // }

        if (existInCart === false) {
            test.albumToCart.push(testAlbum)
        }

        setSelectedItem(test)
        //AddAlbumToCart('one', 'Five Finger Death Punch - F8', 'albumOne', 69);
        console.log(selectedItem);
        console.log(test);


    }

    // function CartList() {
    //      {
    //          selectedItem.albumIsOnCart.map((user, index) => {
    //              return (
    //                  <div>
    //                      <CartList
    //                          key={index}
    //                          id={albumToCartCtx.albumIsOnCart[index].id}
    //                          image={albumToCartCtx.albumIsOnCart[index].image}
    //                          artist={albumToCartCtx.albumIsOnCart[index].artist}
    //                          album={albumToCartCtx.albumIsOnCart[index].album}
    //                          price={albumToCartCtx.albumIsOnCart[index].price}
    //                      />
    //                      )
    //                      }
    //                      }
    //                  </div>
    //                 )
    //          })
    //      }
    // }

    return (
        <>
            {selectedItem.albumToCart !== undefined && selectedItem.albumToCart !== null && selectedItem.albumToCart.length > 0 ? (
                selectedItem.albumToCart.map((user, index) => {
                    return (
                        <p> {index}
                            {selectedItem.albumToCart[index].id}
                            {selectedItem.albumToCart[index].image}
                            {selectedItem.albumToCart[index].name}
                            {selectedItem.albumToCart[index].price}
                        </p>
                    )
                })
            ) : (
                <div>Test</div>
            )}
            <div className={css.dropdown}>
                <button onClick={() => setIsOpen(!isOpen)} className={css.buttonCartImg}><img className={css.imageCart}
                                                                                              src={cart}
                                                                                              alt="cart"/>
                </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={css.dropdownButton}>Varukorg</button>
            {isOpen === true ? (
                <div className={css.dropdownContent}>
                    <p>Dina produkter</p>
                    <hr className={css.hr}/>
                    <section className={css.gridContainer}>
                        <article>
                            <img className={css.imageRemove}
                                 src={remove}
                                 alt="remove"/>
                        </article>
                        <article>
                            {selectedItem.albumToCart !== undefined && selectedItem.albumToCart !== null && selectedItem.albumToCart.length > 0 ? (
                                selectedItem.albumToCart.map((user, index) => {
                                    return (
                                        <p> {index}
                                            {selectedItem.albumToCart[index].id}
                                            {selectedItem.albumToCart[index].image}
                                            {selectedItem.albumToCart[index].name}
                                            {selectedItem.albumToCart[index].price}
                                        </p>
                                    )
                                })
                            ) : (
                                <div>Test</div>
                            )}
                        </article>
                        <article>
                            <input className={css.input}
                                   type="number"
                                   min='0'/>
                        </article>
                        <article>
                            <h4>summa</h4>
                        </article>
                    </section>
                    <section>
                        <hr className={css.hr}/>
                        <h4 className={css.totalSum}>Total Summa</h4>
                        <p>xx kvar till fri frakt</p>
                    </section>
                    <section className={css.endButton}>
                        <button className={css.closeButton} onClick={() => setIsOpen(false)}>
                            X
                        </button>
                        <button className={css.payButton} onClick={pay}>
                            Betala
                        </button>
                    </section>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}