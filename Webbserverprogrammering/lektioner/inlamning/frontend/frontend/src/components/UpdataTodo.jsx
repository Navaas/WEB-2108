import {useState} from "react";
import TodoService from "../utils/api/services/TodoService";
import DataCard from "./DataCard";

const UpdataTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [newName, setNewName] = useState('')
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
                <h2>Uppdatera en todo</h2>
                <span>Namn:</span><input type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}/>
<br/>
                <span>Nytt namn:</span><input type="text"
                                 value={newName}
                                 onChange={event => setNewName(event.target.value)}/>
                <br/>
                <span>Att göra:</span><input type="text"
                                value={todo}
                                onChange={event => setTodo(event.target.value)}/>
                <br/>
                <button onClick={setDataFromApi}>Uppdatera</button>

                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}/>
                    : <h3>{data}</h3>
                }
            </article>
        </>
    )
}

export default UpdataTodo