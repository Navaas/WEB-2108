import {useState} from "react";
import MyApiServices from "../utils/api/services/MyApiServices";

const Subtraction = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState('10')
    const [numTwo, setNumTwo] = useState('5')

    function fetchDataFromExternalApi(){
        MyApiServices.subtraction(numOne, numTwo)
            .then((response)=>{
                setData(response.data)
            })
            .catch((error)=> console.log(error))
    }

    function displayData (){
        if (data.length !== 0) {
            return(
                <h3>Response from Api: "{data}"</h3>
            )
        }
    }

    return(
        <>
        <h1>Subtraction</h1>
            Enter your numbers here: <input type="number" value={numOne} onChange={event => setNumOne(event.target.value)}/>
            <input type="number" value={numTwo} onChange={event => setNumTwo(event.target.value)}/>
            <button onClick={()=> fetchDataFromExternalApi()}>Make Api call</button>
            {displayData()}
        </>
    )

}

export default Subtraction