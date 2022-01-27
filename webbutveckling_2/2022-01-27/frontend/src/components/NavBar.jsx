import css from './NavBar.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from "../router/RoutingPath";
import {UserContext} from "../utils/global/Provider/UserProvider";
import {useContext} from "react";


const NavBar = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <nav>
            <ul className={ css.navList }>
                <li className={ css.item }>
                    <Link className={ `${ css.link } ${ css.active }` } to={ RoutingPath.homeView }>Home</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.link } to={ RoutingPath.signInView }>Sign-In</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.link } to={ RoutingPath.signedInView }>Signed-In</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.link } to={ RoutingPath.signedInView }>Signed-In</Link>
                </li>
                <li className={ css.item }>
                    <Link className={ css.link } to={ RoutingPath.signedInView }>Signed-In</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar