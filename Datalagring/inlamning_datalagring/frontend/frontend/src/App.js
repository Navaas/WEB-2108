import Alive from "./components/Alive";
import GetAllTodo from "./components/GetAllTodo";
import CreateTodo from "./components/CreateTodo";
import GetTodoByName from "./components/GetTodoByName";


function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>
            <GetAllTodo/>
            <CreateTodo/>
            <GetTodoByName/>
        </>
    );
}

export default App;
