import css from "./NavigationBar.module.css";
import {Link} from "react-router-dom";
import RoutingPath from "../../utils/routing/RoutingPath";


export default function NavigationBar() {
    return(
        <nav className={css.nav}>
            <div className={css.gridContainer}>
                <section className={css.navBlank}>
                </section>
                <section className={css.navLinks}>
                    <ul className={css.ul}>
                        <li className={css.li}><Link to={RoutingPath.nyheter}>Nyheter</Link></li>
                        <li className={css.li}><Link to={RoutingPath.produkter}>Produkter</Link></li>
                        <li className={css.li}><Link to={RoutingPath.varumarken}>Varumärken</Link></li>
                        <li className={css.li}><Link to={RoutingPath.kontakt}>Kontakt</Link></li>
                        <button>Logga in</button>
                    </ul>
                </section>
                <section className={css.navBlank}>
                </section>
            </div>
            <section>
                <p className={"free-shipping"}>
                    ✔ Fri frakt vid köp över 499:- ✔ Gåva på köpet
                </p>
            </section>
        </nav>
    )
}
