import TodoService from "../utils/api/services/TodoService"
import {useState} from "react"
import DataCard from "./dataCard/DataCard";

const DeleteTodo = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')

    const sendDataToApi = () => {
        TodoService.deleteTodo(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
                <h2>Delete by id</h2>
                Id: <input type="text"
                           value={userId}
                           onChange={event => setUserId(event.target.value)}/>
                <button onClick={sendDataToApi}>Hämta id</button>
                {data.name ? <DataCard name={data.name}
                                       todo={data.todo}
                                       _id={data._id}/>
                    : <h2>{data}</h2>}
            </article>
        </>
    )
}

export default DeleteTodo