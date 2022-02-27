import TodoService from '../utils/api/services/TodoService';
import {useState} from "react";
import DataList from "./DataList";

const GetAllTodos = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        TodoService.getAllTodo()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <article>
        <h1>Get All Todo</h1>
            <button onClick={() => fetchDataFromExternalApi()}>Get All</button>
            <DataList todo={data}/>
            </article>
        </>
    )
}
export default GetAllTodos