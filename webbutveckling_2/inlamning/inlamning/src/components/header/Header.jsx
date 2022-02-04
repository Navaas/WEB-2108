import css from './Header.module.css'
import Logo from '../../utils/global/image/skallebank.gif'
import Cart from "../cart/Cart";
import SearchBox from "../scarchBox/SearchBox";
import {useState} from "react";

export default function Header() {
    const [searchField, setSearchField] = useState()


    return (
        <header>
            <div className={css.gridContainer}>
                <section className={css.sectionLogo}>
                    <img className={css.imgLogo} src={Logo} alt="logo"/>
                </section>
                <section>
                    {searchField}
                    <SearchBox setSearchField={setSearchField}/>
                </section>
                <section className={css.sectionCart}>
                    <Cart/>

                </section>
            </div>
        </header>
    )
}
