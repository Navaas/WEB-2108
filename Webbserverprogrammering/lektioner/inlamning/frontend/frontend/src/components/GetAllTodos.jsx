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
        <h2>HÄMTA HELA LISTAN</h2>
            <button onClick={() => fetchDataFromExternalApi()}>Hämta Lista</button>
            <DataList todo={data}/>
            </article>
        </>
    )
}
export default GetAllTodos