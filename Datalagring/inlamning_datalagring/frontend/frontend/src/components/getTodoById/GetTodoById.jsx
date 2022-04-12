import TodoService from "../../utils/api/services/TodoService"
import {useState} from "react"
import DataCard from "../dataCard/DataCard";
import css from "../deleteTodo/DeleteTodo.module.css";
import close from "../../utils/global/image/close.png";
import DataList from "../dataList/DataList";

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
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setData(dataArray)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <button onClick={toggleModal} data-testid='buttonText'>Hämta med Id</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.content}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2 data-testid='text'>Hämta en Todo via ett Id</h2>
                            <span>Id:</span> <input type="text"
                                       id={userId}
                                       value={userId}
                                       onChange={event => setUserId(event.target.value)}/>
                            <button onClick={sendDataToApi}>Hämta</button>
                            <button onClick={ () => setData([]) }>Clear</button>

                            { data.length > 0 && data[0].message
                                ? <p>{ data[0].message }</p>
                                : <DataList todo={ data }/> }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GetTodoById