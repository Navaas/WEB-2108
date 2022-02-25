import UserService from '../utils/api/service/UserService'
import {useState} from "react";
import Card from './Card'

const UpdateUser = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('Carina')
    const [newName, setNewName] = useState('Emil')
    const [age, setAge] = useState(20)
    const [gender, setGender] = useState('Male')

    const sendDataToApi = () => {
        const changedUser = {
            'name': name,
            'newName': newName,
            'age': age,
            'gender': gender
        }
        UserService.updateUser(changedUser)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>UpdateUser</h1>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <input type="text"
                   value={newName}
                   onChange={event => setNewName(event.target.value)}/>
            <input type="number"
                   value={age}
                   onChange={event => setAge(Number(event.target.value))}/>
            <input type="text"
                   value={gender}
                   onChange={event => setGender(event.target.value)}/>
            <button onClick={sendDataToApi}>Update New User</button>
            {data.name ? <Card name={data.name}
                               age={data.age}
                               gender={data.gender}/>
                : <h3>{data}</h3>}
        </>
    )
}

export default UpdateUser