import css from './ShoppingCartItem.module.css'
import {useContext, useState} from "react";
import AlbumContext from "../../context/albumContext";


export default function ShoppingCartItem(props) {
    const productOnCartCtx = useContext(AlbumContext);
    const [inputValue, setInputValue] = useState(props.quantity)
    const [totalSumValue, setTotalSumValue] = useState(props.totalSum)

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function removeProductInCartHandler(){
        if (itemIsOnCart) {
            productOnCartCtx.removeProduct(props.id)
        }
    }

    function updateProductInCartHandler(newValue){
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
                <li>
                    <section className={css.gridContainer}>
                        <button onClick={removeProductInCartHandler}>x</button>
                        <img
                            src={props.image}
                            alt={props.name}
                            className={css.imageCart}/>
                        <p>Namn: <span>{props.name}</span></p>
                        <input onChange={(e)=>updateProductInCartHandler(Number(e.target.value))}
                               className={css.input}
                               type="number"
                               min='0'
                               value={inputValue}/>
                        <p>Pris: <span>{totalSumValue}</span> :- </p>
                    </section>
                </li>
            </ul>
        </div>
    )
}
