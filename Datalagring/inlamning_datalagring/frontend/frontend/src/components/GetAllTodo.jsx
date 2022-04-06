import TodoService from "../utils/api/services/TodoService"
import {useState} from "react"
import DataList from "./dataList/DataList";

const GetAllTodo = () => {
    const [data, setData] = useState([])

    const sendToApi = () => {
        TodoService.getAllTodo()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
                <h2>Hämta hela listan</h2>
                <button onClick={() => sendToApi()}>Hämta hela listan</button>
                <DataList todo={data}
                />
            </article>
        </>
    )
}

export default GetAllTodo