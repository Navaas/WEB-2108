import UserService from "../utils/api/service/UserService";
import {useState} from "react";

const DeleteUser = () => {
    const [data, setData] = useState('')
    const [name, setName] = useState('Emil')

    const sendDatatoApi = () => {
        UserService.deleteUser(name)
            .then(response => {
                setData((response.data))
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>DeleteUser</h1>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
            <button onClick={sendDatatoApi}> Delete User</button>
            <h3>{data}</h3>
        </>
    )
}

export default DeleteUser