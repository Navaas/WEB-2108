import {useState} from "react"
import TodoService from "../../utils/api/services/TodoService"
import DataCard from "../dataCard/DataCard";
import css from "../deleteTodo/DeleteTodo.module.css";
import close from "../../utils/global/image/close.png";
import DataList from "../dataList/DataList";

const UpdateTodo = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [_id, set_Id] = useState('')
    const [todo, setTodo] = useState('')
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    const updateTodo = () => {
        const changesTodo = {
            'name': name,
            'todo': todo
        }
        TodoService.updateTodo(_id, changesTodo)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                setData(dataArray)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <button onClick={toggleModal} data-testid='spanText'>Uppdatera Todo</button>
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
                            <span data-testid='text'>Namn:</span><input type="text"
                                                                        value={name}
                                                                        onChange={event => setName(event.target.value)}/>
                            <br/>
                            <span>Att göra:</span><input type="text"
                                                         value={todo}
                                                         onChange={event => setTodo(event.target.value)}/>
                            <br/>
                            <button onClick={updateTodo}>Uppdatera</button>
                            {data.length > 0 && data[0].message
                                ? <p>{data[0].message}</p>
                                : <DataList todo={data}/> }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UpdateTodo
