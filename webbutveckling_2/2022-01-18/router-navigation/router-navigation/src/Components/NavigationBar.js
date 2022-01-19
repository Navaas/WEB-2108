import {Link} from "react-router-dom";
import RoutingPath from "../utils/routing/RoutingPath";
import './NavigationBar.css'

export default function NavigationBar(){
    return(
        <nav>
            <ul>
                <li><Link to={RoutingPath.homeView}>Home</Link></li>
                <li><Link to={RoutingPath.otherView}>Other</Link></li>
                <li><Link to={RoutingPath.blogView}>Blog</Link></li>
                <li><Link to={RoutingPath.contactView}>Contact</Link></li>
            </ul>
        </nav>
    )
}