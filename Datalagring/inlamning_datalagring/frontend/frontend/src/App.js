import Alive from "./components/Alive";
import GetAllTodo from "./components/getAllTodo/GetAllTodo";
import CreateTodo from "./components/createTodo/CreateTodo";
import GetTodoByName from "./components/getTodoByName/GetTodoByName";
import UpdateTodo from "./components/updateTodo/UpdateTodo";
import GetTodoById from "./components/getTodoById/GetTodoById";
import DeleteTodo from "./components/deleteTodo/DeleteTodo";
import MyTodoText from "./components/myTodoText/MyTodoText";


function App() {
    return (
        <>
            <Alive/>
            <MyTodoText/>
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
