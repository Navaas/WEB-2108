import TodoService from "../../utils/api/services/TodoService"
import {useState} from "react"
import DataList from "../dataList/DataList";
import css from "./GetAllTodo.module.css";
import close from "../../utils/global/image/close.png";

const GetAllTodo = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }
    const sendToApi = () => {
        TodoService.getAllTodo()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <button onClick={toggleModal} data-testid='buttonText'>Hämta hela listan</button>
            {modal && (
                <div className={css.popup}>
                    <div className={css.overlay}>
                        <div className={css.scrollWindowProperties}>
                            <img src={close} alt="close" className={css.close} onClick={toggleModal}/>
                            <h2>Hämta hela listan</h2>
                            <button onClick={sendToApi} >Hämta hela listan</button>
                            <DataList  todo={data}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GetAllTodo