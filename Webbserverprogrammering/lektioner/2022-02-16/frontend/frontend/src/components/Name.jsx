import {useState} from "react";
import MyApiServices from "../utils/api/services/MyApiServices";

const Name = () => {
    const [data, setData] = useState('')
    const [yourName, setYourName] = useState('Michaela')

    function fetchDataFromExternalApi(){
        MyApiServices.name(yourName)
            .then((response)=>{
                setData(response.data)
            })
            .catch((error)=> console.log(error))
    }

    function displayData(){
        if (data.length !== 0){
            return <h3>Response from Api: { data }" </h3>
        }
    }

    return(
        <>
        <h1>Name</h1>
            Enter your name: <input type="text"
                                    value={yourName}
                                    onChange={event => setYourName(event.target.value)}/>
            <button onClick={() => fetchDataFromExternalApi()}>Make Api call</button>
            {displayData()}
        </>
    )

}

export default Name