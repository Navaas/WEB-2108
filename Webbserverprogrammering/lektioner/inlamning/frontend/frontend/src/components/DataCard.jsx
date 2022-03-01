import '../utils/global/css/global.css'
import {useState} from "react";
import css from './DataCard.module.css'
import TodoService from "../utils/api/services/TodoService";


const DataCard = ({name, todo}) => {
    const [done, setDone] = useState(false)

    function toggleDone() {
        setDone(!done)


    }

    return (
        <p className={done ? css.doneTodo : null} onClick={toggleDone}> {todo} - {name}</p>
    )

}

export default DataCard