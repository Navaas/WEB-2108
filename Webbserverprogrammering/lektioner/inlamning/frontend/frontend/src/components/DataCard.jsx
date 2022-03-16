import '../utils/global/css/global.css'
import {useState} from "react";
import css from './DataCard.module.css'
import TodoService from "../utils/api/services/TodoService";


const DataCard = ({name, todo, id, doneTodo}) => {
    const [done, setDone] = useState(doneTodo)

    function toggleDone() {
        TodoService.toggleToFalse(id)
            .then(response => {
                setDone(response.data.doneTodo)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <p className={done ? css.doneTodo : null} onClick={toggleDone}> {todo} - {name}</p>
        </div>
    )

}

export default DataCard