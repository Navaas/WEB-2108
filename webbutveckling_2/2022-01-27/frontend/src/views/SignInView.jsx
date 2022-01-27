import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import RoutingPath from "../router/RoutingPath";
import {UserContext} from "../utils/global/Provider/UserProvider";

function SignInView() {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const correct = {
        username: 'Michaela',
        password: 'Hemligt'
    }

    function validateInput() {
        if (username === correct.username && password === correct.password) {
            setAuthenticatedUser(username)
            navigate(RoutingPath.signedInView)
        } else {
            setError('Wrong credentials provided')
        }
    }



    return (
        <>
            <h1>SignInView</h1>
            <span>Username: </span>
            <input type="text" onChange={event => setUsername(event.target.value)}/>
            <br/>
            <span>Password: </span>
            <input type="text" onChange={event => setPassword(event.target.value)}/>
            <br/>
            <h3>{error}</h3>
            <button onClick={validateInput}>Sign In</button>
        </>

    )
}

export default SignInView