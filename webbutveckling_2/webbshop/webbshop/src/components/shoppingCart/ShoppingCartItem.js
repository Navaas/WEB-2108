import css from './ShoppingCartItem.module.css'
import {useContext, useState} from "react";
import AlbumContext from "../../context/AlbumContext";
import remove from '../../utils/global/image/trash.png'


export default function ShoppingCartItem(props) {
    const productOnCartCtx = useContext(AlbumContext);
    const [inputValue, setInputValue] = useState(props.quantity)
    const [totalSumValue, setTotalSumValue] = useState(props.totalSum)

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function removeProductInCartHandler() {
        if (itemIsOnCart) {
            productOnCartCtx.removeProduct(props.id)
        }
    }

    function updateProductInCartHandler(newValue) {
        console.log(newValue);
        if (itemIsOnCart) {
            productOnCartCtx.updateProductOnCartWithNewValue(props.id, newValue);
            const currentProduct = productOnCartCtx.productOnCart.find(prevItemsSelected => prevItemsSelected.id === props.id);
            setInputValue(currentProduct.quantity);
            setTotalSumValue(currentProduct.totalSum);
        }
    }

    return (
        <div>
            <ul>
                <section className={css.gridContainer}>
                    <article>
                        <img src={remove} alt="remove" className={css.remove} onClick={removeProductInCartHandler}/>
                    </article>
                    <article>
                        <img
                            src={props.image}
                            alt={props.name}
                            className={css.imageCart}/>
                        <h3>Namn: {props.name}</h3>
                    </article>
                    <article>
                        <input onChange={(e) => updateProductInCartHandler(Number(e.target.value))}
                               className={css.input}
                               type="number"
                               min='0'
                               value={inputValue}/>
                    </article>
                    <article>
                        <h3>Pris: {totalSumValue} :- </h3>
                    </article>
                </section>
            </ul>
        </div>
    )
}
