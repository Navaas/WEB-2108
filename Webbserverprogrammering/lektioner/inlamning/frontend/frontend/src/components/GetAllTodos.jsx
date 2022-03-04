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
        <h2 data-testid='headerText'>Hämta hela listan</h2>
            <button onClick={() => fetchDataFromExternalApi()}>Hämta hela listan</button>
            <DataList todo={data}/>
            </article>
        </>
    )
}
export default GetAllTodos