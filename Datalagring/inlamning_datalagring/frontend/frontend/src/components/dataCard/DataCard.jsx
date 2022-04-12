import {useState} from "react";
import TodoService from "../../utils/api/services/TodoService";
import css from './DataCard.module.css'

const DataCard = ({name, todo, _id, todoIsDone}) => {
    const [isDone, setIsDone] = useState(todoIsDone)

    function todoIsDoneToggle() {
        const payload = {
            newTodoStatus: !isDone
        }
        TodoService.toggleDone(_id, payload)
            .then(response => {
                console.log(response.data)
                setIsDone(response.data)
            }).catch(error => console.log(error))
    }

    return (
        <div>
            <ul className={isDone ? css.doneTodo : null} onClick={todoIsDoneToggle}>
                <li>Namn: {name}</li>
                <li className={css.otherFont}>Todo: {todo}</li>
                <li className={css.otherFont}> Id: {_id}</li>
            </ul>
        </div>
    )
}

export default DataCard