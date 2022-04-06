import TodoService from "../utils/api/services/TodoService";
import {useState} from "react";
import DataList from "./dataList/DataList";


const GetTodoByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TodoService.getTodoWithName(name)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
                <h2>Hämta namn i listan</h2>
                <span>Namn:</span> <input type="text"
                                          value={name}
                                          onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Hämta</button>
                <DataList todo={data}/>
            </article>
        </>
    )
}

export default GetTodoByName