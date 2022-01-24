/*import robots from "./utils/data/Robots";*/
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import {useEffect, useState} from "react";

function App() {
    const [searchField, setSearchField] = useState('')
    const [robots, setRobots] = useState([])

    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const fetchRobots = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            })
    }

    useEffect(() => {
        fetchRobots()
    }, [])

return (
    <div className='tc'>
        <h1 className='robo-logo f1'>Robofriends</h1>
        {searchField}
        <SearchBox setSearchField={setSearchField}/>
        <Scroll>
            <CardList robots={ filteredRobot }/>
        </Scroll>
    </div>
);
}

export default App;

