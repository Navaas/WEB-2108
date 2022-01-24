import {useState} from "react";
import {useNavigate} from "react-router-dom";
import RoutingPath from "../routing/RoutingPath";

export default function LoginView() {

    const logIn = {
        username: 'Michaela',
        password: 'Hemligt'
    }
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function reset() {
        setName('')
        setPassword('')
    }

    function verify() {
        if (name === logIn.username && password === logIn.password)
            navigate(RoutingPath.loggedInView)

        else
            alert('Credentials NOT correct')
    }


    return (
        <>
            <h1>LoginView</h1>
            <input type='text'
                   value={name}
                   onChange={(getName) => setName(getName.target.value)}/>
            <br/>
            <input type='password'
                   value={password}
                   onChange={(getPassword) => setPassword(getPassword.target.value)}/>
            <br/>
            <button onClick={reset}>Reset</button>
            <button onClick={verify}>Verify</button>
        </>
    )
}