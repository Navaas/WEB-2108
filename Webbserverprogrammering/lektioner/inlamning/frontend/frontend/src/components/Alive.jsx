import { useState } from "react";
import AliveService from '../utils/api/services/AliveService';


const Alive = () => {
    const [data, setData] = useState('')

    function fetchDataFromExternalApi() {
        AliveService.alive()
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