import {useState} from "react";
import TodoService from "../utils/api/services/TodoService";
import DataCard from "./DataCard";

const UpdataTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Carina')
    const [newName, setNewName] = useState('Christoffer')
    const [todo, setTodo] = useState('')

    const setDataFromApi = () => {
        const changesTodo = {
            'name': name,
            'newName': newName,
            'todo': todo
        }
        TodoService.updateTodo(changesTodo)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <article>
                <h1>UpdateTodo</h1>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <input type="text"
                       value={newName}
                       onChange={event => setNewName(event.target.value)}/>
                <input type="text"
                       value={todo}
                       onChange={event => setTodo(event.target.value)}/>
                <button onClick={setDataFromApi}>Uppdate New Todo</button>

                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}/>
                    : <h3>{data}</h3>
                }
            </article>
        </>
    )
}

export default UpdataTodo