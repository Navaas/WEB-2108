import {useState} from "react";
import MyApiServices from "../utils/api/services/MyApiServices";

const FullName = () => {
    const [data, setData] = useState('')
    const [forName, setForName] = useState('Michaela')
    const [lastName, setLastName] = useState('Andreasson')

    function fetchDataFromExternalApi(){
        MyApiServices.fullName(forName,lastName)
            .then((response)=>{
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData(){
        if (data.length !== 0){
            return(
                <h3>Response from Api: "{ data }"</h3>
            )
        }
    }

    return(
        <>
        <h1>FullName</h1>
            Enter your name here: <input type="text" value={forName} onChange={event => setForName(event.target.value)}/>
            <input type="text" value={lastName} onChange={event => setLastName(event.target.value)}/>
            <button onClick={() => fetchDataFromExternalApi()}>Make Api call</button>
            {displayData()}
        </>
    )
}

export default FullName