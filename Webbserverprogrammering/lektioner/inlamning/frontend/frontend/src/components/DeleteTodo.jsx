import TodoService from "../utils/api/services/TodoService";
import {useState} from "react";
import GetAllTodos from "./GetAllTodos";

const DeleteTodo = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Moa')

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
                <h2 data-testid='headerText'>Ta bort en Todo</h2>
                <span>Namn:</span><input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <button data-testid='deleteButton' onClick={sendDataToApi}>Ta Bort</button>
                <h3 data-testid='responseFromDatabase'>{data}</h3>
            </article>
        </>
    )
}

export default DeleteTodo