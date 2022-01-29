import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import NyheterView from "../../views/NyheterView";
import ProdukterView from "../../views/Products/ProdukterView";
import VarumarkenView from "../../views/VarumarkenView";
import KontaktView from "../../views/KontaktView";

export default function Routing({ children }){
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path={RoutingPath.nyheter} element={<NyheterView/>}/>
                <Route path={RoutingPath.produkter} element={<ProdukterView/>}/>
                <Route path={RoutingPath.varumarken} element={<VarumarkenView/>}/>
                <Route path={RoutingPath.kontakt} element={<KontaktView/>}/>
            </Routes>
        </BrowserRouter>
    )
}