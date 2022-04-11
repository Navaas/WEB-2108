import Alive from "./components/Alive";
import GetAllTodo from "./components/getAllTodo/GetAllTodo";
import CreateTodo from "./components/CreateTodo";
import GetTodoByName from "./components/getTodoByName/GetTodoByName";
import UpdateTodo from "./components/updateTodo/UpdateTodo";
import GetTodoById from "./components/getTodoById/GetTodoById";
import DeleteTodo from "./components/deleteTodo/DeleteTodo";


function App() {
    return (
        <>
            <Alive/>
            <CreateTodo/>
            <section>
                <GetAllTodo/>
                <UpdateTodo/>
                <GetTodoByName/>
                <GetTodoById/>
                <DeleteTodo/>
            </section>
        </>
    );
}

export default App;
