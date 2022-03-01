import TodoService from "../utils/api/services/TodoService";
import {useState} from "react";
import DataCard from "./DataCard";

const GetOneTodoByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () => {
        TodoService.oneTodoByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
                <h2>Hämta ett namn i listan</h2>
                <span>Namn:</span> <input type="text"
                             value={name}
                             onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Hämta</button>
                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}/>
                    : <h3>{data}</h3>
                }
            </article>
        </>
    )
}

export default GetOneTodoByName