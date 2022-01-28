import Routing from "./router/Routing";
import NavBar from "./components/NavBar";
import {UserProvider} from "./utils/global/Provider/UserProvider";

function App() {
    return (
        <UserProvider>
            <Routing>
                <NavBar/>
            </Routing>
        </UserProvider>
    );
}

export default App;
