import {PrimaryButton, SecondaryButton} from "../../Components/CostumBotton";
import {useState} from "react";

export default function LoggedInView() {
    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount(count +1)
    }

function resetCount(){
        setCount(0)
}
    function setCountToTen(){
        setCount(10)
    }

    return (
        <>
            <h1>Du är nu inloggad</h1>
            <h2>Count = {count}</h2>
            <PrimaryButton children={'Increase by 1'}
                           onClick={increaseCount}/>
            <SecondaryButton  children={'Decrease by 1'}
                              onClick={ () => {setCount(count -1)} }/>
            <PrimaryButton children={'Reset'}
                           onClick={ resetCount }/>
            <PrimaryButton children={'Set to 10'}
                           onClick={ () => setCountToTen() }/>
        </>
    )
}