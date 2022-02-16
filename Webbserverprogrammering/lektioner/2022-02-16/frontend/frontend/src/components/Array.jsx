import {useState} from "react";
import MyApiServices from "../utils/api/services/MyApiServices";

const Array = () => {
    const [data, setData] = useState('')
    const [array, setArray] = useState([])


    function fetchDataFromExternalApi() {
        MyApiServices.array(array)
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
            <h1>Array</h1>
            <button onClick={()=> fetchDataFromExternalApi()}>Make Api call</button>
            {displayData()}
        </>
    )

}

export default Array