import {useState} from "react"
import TodoService from "../utils/api/services/TodoService"
import DataCard from "./dataCard/DataCard";

const CreateTodo = () => {
    const [data, setData] = useState({})
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
                <h2>Skapa ny Todo</h2>
                <span>Namn:</span><input type="text"
                                         value={name}
                                         onChange={event => setName(event.target.value)}/>
                <span>Todo:</span><input type="text"
                                         value={todo}
                                         onChange={event => setTodo(event.target.value)}/>
                <button onClick={sendDataToApi}>Skapa</button>
                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}
                                       _id={data._id}/>
                    : ''}
            </article>
        </>
    )
}

export default CreateTodo