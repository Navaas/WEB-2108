import TodoService from "../utils/api/services/TodoService"
import {useState} from "react"
import DataCard from "./dataCard/DataCard";

const GetTodoById = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')

    const sendDataToApi = () => {
        TodoService.getTodoById(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
                <h1>Hämta en Todo via ett Id</h1>
                Id: <input type="text"
                           value={userId}
                           onChange={event => setUserId(event.target.value)}/>
                <button onClick={sendDataToApi}>Hämta Id</button>
                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}/>
                    : <h2>{data}</h2>}
            </article>
        </>
    )
}

export default GetTodoById