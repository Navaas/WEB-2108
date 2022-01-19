import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from "../views/HomeView";
import OtherView from "../views/OtherView";
import ContactView from "../views/ContactView";
import BlogView from "../views/BlogView";

export default function Routing(props){
    return(
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>}/>
                <Route path={RoutingPath.otherView} element={<OtherView/>}/>
                <Route path={RoutingPath.blogView} element={<BlogView/>}/>
                <Route path={RoutingPath.contactView} element={<ContactView/>}/>
            </Routes>
        </BrowserRouter>
    )
}