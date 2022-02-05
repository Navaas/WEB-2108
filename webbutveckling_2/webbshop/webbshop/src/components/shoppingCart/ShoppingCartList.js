import { useContext } from "react";
import ShoppingCartItem from './ShoppingCartItem'

import AlbumContext from "../../context/albumContext";



export default function ShoppingCartList(props) {
    const productOnCartCtx = useContext(AlbumContext);
    function cancelHandler(){
        props.onCancel();
    }

    function paymentHandler(){
        props.onConfirm();
    }

    return (
        <div>

            <div  >
                <h2>My shop cart information</h2>
                <hr/>
                <div className='tc bg-blue' >
                    {
                        productOnCartCtx.productOnCart.map((user, index) => {
                            return (
                                <ShoppingCartItem
                                    key={ index }
                                    id={ productOnCartCtx.productOnCart[index].id }
                                    image={ productOnCartCtx.productOnCart[index].image }
                                    name={ productOnCartCtx.productOnCart[index].name }
                                    price={ productOnCartCtx.productOnCart[index].price }
                                />
                            )
                        })
                    }
                </div>
                <article  >
                    <p>SUMMARY:</p>
                    <p >  free freight!</p>
                </article>
                <button  onClick={ cancelHandler }>Close</button>
                <button  onClick={ paymentHandler }>Checkout</button>
            </div>
        </div>
    )
}