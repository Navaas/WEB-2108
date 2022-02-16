import {useState} from "react";
import MyApiServices from "../utils/api/services/MyApiServices";

const Addition = () => {
    const [data, setData] = useState('')
    const [numOne, setNumOne] = useState(4)
    const [numTwo, setNumTwo] = useState(4)

    function fetchDataFromExternalApi() {
        MyApiServices.addition(numOne, numTwo)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from Api: "{data}"</h3>
        }
    }

    return (
        <>
            <h1>Addition</h1>
            Enter your numbers: <input type="number" value={numOne} onChange={event => setNumOne(event.target.value)}/>
            <input type="number" value={numTwo} onChange={event => setNumTwo(event.target.value)}/>
            <button onClick={()=> fetchDataFromExternalApi()}>Make Api call</button>
            {displayData()}
        </>
    )

}

export default Addition