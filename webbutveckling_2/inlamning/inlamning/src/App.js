import NavigationBar from './components/navigationBar/NavigationBar';
import Routing from "./utils/routing/Routing";
import './utils/global/css/global.css'
import Header from "./components/header/Header";
import {useState} from "react";
import Footer from "./components/footer/Footer";



function App() {
    const [searchField, setSearchField] = useState()

    return (
        <>
            <Header setSearchField={setSearchField}/>
            <Routing>
                <NavigationBar/>
            </Routing>
            <Footer/>
        </>
    );
}

export default App;