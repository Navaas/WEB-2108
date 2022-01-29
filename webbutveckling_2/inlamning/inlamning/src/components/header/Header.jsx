import css from './Header.module.css'
import Logo from '../../utils/global/image/green.gif'
import Cart from "../cart/Cart";
import SearchBox from "../scarchBox/SearchBox";


export default function Header() {


    return (
        <header>
            <div className={css.gridContainer}>
                <section className={css.sectionLogo}>
                    <img className={css.imgLogo} src={Logo} alt="logo"/>
                </section>
                <section>
                    <SearchBox/>
                </section>
                <section className={css.sectionCart}>
                    <Cart/>
                </section>
            </div>
        </header>
    )
}