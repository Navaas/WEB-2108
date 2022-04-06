import {useState} from "react";
import TodoService from "../../utils/api/services/TodoService";
import css from './DataCard.module.css'

const DataCard = ({name, todo, _id, done}) => {
    const [isDone, setIsDone] = useState(done)

    function toggleDone() {
        TodoService.toggleDone(_id)
            .then(response => {
                setIsDone(response.data.done)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className={isDone ? css.doneTodo : null} onClick={toggleDone}> Att göra:{todo} - Namn:{name} id:{_id}</p>
        </div>
    )
}

export default DataCard