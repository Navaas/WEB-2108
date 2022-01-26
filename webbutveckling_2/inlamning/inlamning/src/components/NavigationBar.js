import './NavigationBar.css'
import {Link} from "react-router-dom";
import RoutingPath from "../utils/routing/RoutingPath";
import Cart from "./Cart";

export default function NavigationBar() {
    return(
        <nav>
            <div className='grid-container'>
                <section>

                </section>
                <section className='nav-input'>
                    <ul>
                        <li><Link to={RoutingPath.nyheter}>Nyheter</Link></li>
                        <li><Link to={RoutingPath.produkter}>Produkter</Link></li>
                        <li><Link to={RoutingPath.varumarken}>Varumärken</Link></li>
                        <li><Link to={RoutingPath.kontakt}>Kontakt</Link></li>
                    </ul>
                </section>
                <section className='nav-blank'>
                </section>
            </div>
            <section>
                <p className="free-shipping">
                    ✔ Fri frakt vid köp över 499:- ✔ Gåva på köpet
                </p>
            </section>
        </nav>
    )
}
