import TodoService from "../utils/api/services/TodoService";
import {useState} from "react";
import GetAllTodos from "./GetAllTodos";

const DeleteTodo = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Christoffer')

    const sendDataToApi = () => {
        TodoService.deleteTodo(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <article>
                <h1>Delete Todo</h1>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Delete Todo</button>
                <h3>{data}</h3>
            </article>
        </>
    )
}

export default DeleteTodo