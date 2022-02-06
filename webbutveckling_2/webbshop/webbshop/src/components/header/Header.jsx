import {useState} from "react";
import ShoppingCartList from "../shoppingCart/ShoppingCartList";
import css from './Header.module.css';
import Logo from '../../utils/global/image/skallebank.png';
import cart from '../../utils/global/image/cart.png';
import SearchBox from "../searchBox/SearchBox";

;


function Header(props) {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    function cartHandler() {
        setCartIsOpen(true);
        console.log('clicked')
        console.log(props.text)
    }

    function closeCartHandler() {
        if (cartIsOpen === true) {
            setCartIsOpen(false);
        }
    }

    function messageExitPayment() {
        alert('Thanks for your purchase!!')
    }

    return (
        <header>
            <div className={css.gridContainer}>
                <section className={css.sectionLogo}>
                    <img className={css.imgLogo} src={Logo} alt="logo"/>
                </section>
                <section>
                    <SearchBox/>
                </section>
                <section className={ css.sectionCart }>
                    <button onClick={() => {
                        cartHandler()
                        closeCartHandler()
                    }} className={css.buttonCartImg}><img className={css.imageCart}
                                                          src={cart}
                                                          alt="cart"/>
                    </button>
                    <button className={css.dropdownButton}
                            onClick={() => {
                                cartHandler()
                                closeCartHandler()
                            }}><span>Varukorg</span></button>

                    {cartIsOpen && <ShoppingCartList onCancel={closeCartHandler} onConfirm={messageExitPayment}/>}
                </section>
            </div>
        </header>
    )

}

export default Header