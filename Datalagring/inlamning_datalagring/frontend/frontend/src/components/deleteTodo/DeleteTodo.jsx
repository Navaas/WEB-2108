import TodoService from "../../utils/api/services/TodoService"
import {useState} from "react"
import DataCard from "../dataCard/DataCard";
import css from './DeleteTodo.module.css'
import close from '../../utils/global/image/close.png'

const DeleteTodo = () => {
    const [data, setData] = useState([])
    const [userId, setUserId] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }

    const sendDataToApi = () => {
        TodoService.deleteTodo(userId)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <button onClick={toggleModal} data-testid='buttonText'>Ta bort</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.content}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2 data-testid='text'>Ta bort en Todo via Id</h2>
                            Id: <input type="text"
                                       value={userId}
                                       onChange={event => setUserId(event.target.value)}/>
                            <button onClick={sendDataToApi}>Hämta id</button>
                            {data.name ? <DataCard name={data.name}
                                                   todo={data.todo}
                                                   _id={data._id}/>
                                : <h2>{data}</h2>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeleteTodo