import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import NyheterView from "../../views/NyheterView";
import ProdukterView from "../../views/Products/ProdukterView";
import KontaktView from "../../views/KontaktView";
import HomeView from "../../views/HomeView";

export default function Routing({ children }){
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path={RoutingPath.hem} element={<HomeView/>}/>
                <Route path={RoutingPath.nyheter} element={<NyheterView/>}/>
                <Route path={RoutingPath.produkter} element={<ProdukterView/>}/>
                <Route path={RoutingPath.kontakt} element={<KontaktView/>}/>
            </Routes>
        </BrowserRouter>
    )
}