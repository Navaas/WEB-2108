import TodoService from "../../utils/api/services/TodoService";
import {useState} from "react";
import DataList from "../dataList/DataList";
import css from "../deleteTodo/DeleteTodo.module.css";
import close from "../../utils/global/image/close.png";


const GetTodoByName = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    const sendDataToApi = () => {
        TodoService.getTodoWithName(name)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <button onClick={toggleModal}>Hämta ett namn</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.content}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2>Hämta namn i listan</h2>
                            <span>Namn:</span> <input type="text"
                                                      value={name}
                                                      onChange={event => setName(event.target.value)}/>
                            <button onClick={sendDataToApi}>Hämta</button>
                            <DataList todo={data}/>
                            <button onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GetTodoByName