import Alive from "./components/Alive";
import GetAllTodo from "./components/GetAllTodo";
import CreateTodo from "./components/CreateTodo";
import GetTodoByName from "./components/GetTodoByName";
import UpdateTodo from "./components/UpdateTodo";
import GetTodoById from "./components/GetTodoById";
import DeleteTodo from "./components/DeleteTodo";


function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <GetAllTodo/>
            <CreateTodo/>
            <GetTodoByName/>
            <UpdateTodo/>
            <GetTodoById/>
            <DeleteTodo/>
        </>
    );
}

export default App;
