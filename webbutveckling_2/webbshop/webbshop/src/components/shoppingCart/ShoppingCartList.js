import { useContext } from "react";
import ShoppingCartItem from './ShoppingCartItem'
import AlbumContext from "../../context/albumContext";
import css from './ShoppingCartList.module.css'


export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(AlbumContext);

    function cancelHandler(test){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    function pay (){
        alert('Tack för din betalning!')
    }

    return (
        <div>
            <div>
                <div className={ css.dropdownContent}>
                    <h2>Dina produkter</h2>
                    <hr className={ css.hr }/>
                    {
                        productOnCartCtx.productOnCart.map((user, index) => {
                            return (
                                <ShoppingCartItem
                                    key={ index }
                                    id={ productOnCartCtx.productOnCart[index].id }
                                    image={ productOnCartCtx.productOnCart[index].image }
                                    name={ productOnCartCtx.productOnCart[index].name }
                                    price={ productOnCartCtx.productOnCart[index].price }
                                    quantity={ productOnCartCtx.productOnCart[index].quantity }
                                    totalSum={ productOnCartCtx.productOnCart[index].totalSum }
                                />
                            )
                        })
                    }
                    <section className={css.totalSum}>
                        <p>Antal i varukorgen: {productOnCartCtx.totalAlbumInCart}</p>
                    </section>
                    <section className={css.totalSum}>
                        <p>Totalsumma: {productOnCartCtx.totalSumInCart}</p>
                    </section>
                    <article>
                        <p>{productOnCartCtx.totalSumInCart >= 259 ? 'Fri Frakt!' : (259 - productOnCartCtx.totalSumInCart) + 'kr kvar till fri frakt' }</p>
                    </article>
                    <section className={css.endButton}>
                        <button className={css.closeButton} onClick={cancelHandler}>
                            X
                        </button>
                        <button className={css.payButton} onClick={ pay }>
                            Betala
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}