import {useState} from "react"
import TodoService from "../../utils/api/services/TodoService"
import DataCard from "../dataCard/DataCard";
import css from "../deleteTodo/DeleteTodo.module.css";
import close from "../../utils/global/image/close.png";

const UpdateTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [_id, set_Id] = useState('')
    const [todo, setTodo] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    const sendDataFromApi = () => {
        const changesTodo = {
            'name': name,
            'todo': todo
        }
        TodoService.updateTodo(_id, changesTodo)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <button onClick={toggleModal}>Uppdatera Todo</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.content}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2>Uppdatera en Todo</h2>
                            <span>Id:</span><input type="text"
                                                   value={_id}
                                                   onChange={event => set_Id(event.target.value)}/>
                            <br/>
                            <span>Namn:</span><input type="text"
                                                     value={name}
                                                     onChange={event => setName(event.target.value)}/>
                            <br/>
                            <span>Att göra:</span><input type="text"
                                                         value={todo}
                                                         onChange={event => setTodo(event.target.value)}/>
                            <br/>
                            <button onClick={sendDataFromApi}>Uppdatera</button>
                            {data.name ? <DataCard name={data.name}
                                                   todo={data.todo}
                                                   _id={data._id}/>
                                : <h3>{data}</h3>}
                            <button onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UpdateTodo