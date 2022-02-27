import {useState} from "react";
import TodoService from "../utils/api/services/TodoService";
import DataList from "./DataList";

const CreateTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Carina')
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
            <h1>CreateTodo</h1>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <input type="text"
                   value={todo}
                   onChange={event => setTodo(event.target.value)}/>
            <button onClick={sendDataToApi}>Create New Task</button>
            <DataList todo={data}/>
            </article>
        </>
    )
}

export default CreateTodo