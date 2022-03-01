import Alive from "./components/Alive";
import GetAllTodos from "./components/GetAllTodos";
import './utils/global/css/global.css'
import CreateTodo from "./components/CreateTodo";
import UpdataTodo from "./components/UpdataTodo";
import DeleteUser from "./components/DeleteTodo";
import GetOneTodoByName from "./components/GetOneTodoByName";

function App() {
    return (
        <>
            <Alive/>
            <GetAllTodos/>
            <CreateTodo/>
            <UpdataTodo/>
            <DeleteUser/>
            <GetOneTodoByName/>
        </>

    )
        ;
}

export default App;
