import Alive from './components/Alive'
import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import GetAllUsers from "./components/GetAllUsers";
import UpdateUser from "./components/UpdateUser";

function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <CreateUser/>
            <DeleteUser/>
            <GetAllUsers/>
            <UpdateUser/>
        </>
    );

}

export default App
