import css from './ToDoList.module.css'
import MyApiServices from '../utils/api/services/MyApiServices';
import {useState} from "react";

export default function ToDoList() {
    const [data, setData] = useState('')
    const [name, setName] = useState([])

    function fetchDataFromExternalApi() {
        MyApiServices.ToDoList(name)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from Api: "{name}"</h3>
        }
    }

    return (
        <>
            <div>
                <section className={css.toDoContent}>
                    <h1 className={css.toDoText}>Att göra lista</h1>
                    <input className={css.input} type="text"
                           value={name}
                           onChange={event => setName(event.target.value)}/>
                    <button className={css.button} onClick={() => {fetchDataFromExternalApi()}}>Lägg till</button>
                    {displayData()}
                </section>
            </div>
        </>
    )
}