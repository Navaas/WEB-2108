import TodoService from "../../utils/api/services/TodoService"
import {useState} from "react"
import DataCard from "../dataCard/DataCard";
import css from "../deleteTodo/DeleteTodo.module.css";
import close from "../../utils/global/image/close.png";

const GetTodoById = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    const sendDataToApi = () => {
        TodoService.getTodoById(userId)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <button onClick={toggleModal}>Hämta med Id</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.popup.content}>
                        <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                        <h1>Hämta en Todo via ett Id</h1>
                        Id: <input type="text"
                                   value={userId}
                                   onChange={event => setUserId(event.target.value)}/>
                        <button onClick={sendDataToApi}>Hämta Id</button>
                        {data.name ? <DataCard name={data.name}
                                               todo={data.todo}/>
                            : <h2>{data}</h2>}
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default GetTodoById