import {useState} from "react";
import TodoService from "../utils/api/services/TodoService";
import DataList from "./DataList";

const CreateTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const newTodo = {
            'name': name,
            'todo': todo
        }
        TodoService.createTodo(newTodo)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <article>
            <h2 data-testid='headerText'>Skapa todo</h2>
                <span>Namn:</span><input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
                <span>Todo:</span><input type="text"
                   value={todo}
                   onChange={event => setTodo(event.target.value)}/>
            <button onClick={sendDataToApi}>Skapa Ny</button>
            <DataList todo={data}/>
            </article>
        </>
    )
}

export default CreateTodo