import { useState } from "react";
import MyApiServices from "../utils/api/services/MyApiServices";


const Alive = () => {
    const [data, setData] = useState('')

    function fetchDataFromExternalApi() {
        MyApiServices.Alive()
            .then(response => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData(){
        if (data.length !== 0){
            return <h3>Response from API "{data}"</h3>
        }
    }

    return(
        <>
        <h1>Alive</h1>
            <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
            {displayData()}
        </>
    )

}

export default Alive