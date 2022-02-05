import {useState} from "react";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";


function Header(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function cartHandler() {
        setCartIsOpen(true);
        console.log('clicked')
        console.log(props.text)
    }

    function closeCartHandler() {
        if (cartIsOpen === true){
            setCartIsOpen(false);
        }
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }
    return (
        <header >
            <div >
                <button
                    onClick={ () => {
                        cartHandler()
                        closeCartHandler()
                    }  } ><span >ShopCart</span></button>
            </div>
            {cartIsOpen && <ShoppingCartList onCancel={closeCartHandler} onConfirm={messageExitPayment}/>}

        </header>
    )

}

export default Header