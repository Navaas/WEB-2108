import NavigationBar from './components/NavigationBar';
import Routing from "./utils/routing/Routing";
import './utils/global/global.css'
import Header from "./components/Header";


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
