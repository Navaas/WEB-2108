import { BrowserRouter, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from "../views/HomeView";
import SignInView from "../views/SignInView";
import SignedInView from "../views/SignedInView";

export default function Routing({ children }){
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/>} />
                <Route path={ RoutingPath.signInView } element={ <SignInView/>} />
                <Route path={ RoutingPath.signedInView } element={ <SignedInView/>} />
            </Routes>
        </BrowserRouter>
    )
}