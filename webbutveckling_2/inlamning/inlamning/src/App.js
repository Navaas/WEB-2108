import NavigationBar from './components/navigationBar/NavigationBar';
import Routing from "./utils/routing/Routing";
import './utils/global/css/global.css'
import Header from "./components/header/Header";


function App() {
    return (
        <>
            <Header />
            <Routing>
                <NavigationBar/>
            </Routing>
        </>
    );
}

export default App;
