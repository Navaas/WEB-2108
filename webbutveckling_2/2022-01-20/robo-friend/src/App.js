import robots from "./utils/data/Robots";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import {useState} from "react";

function App() {
    const [searchField, setSearchField] = useState()

    return (
        <div className='tc'>
            <h1 className='robo-logo f1'>Robofriends</h1>
            { searchField }
            <SearchBox setSearchField={setSearchField}/>
            <Scroll>
                <CardList robots={robots}/>
            </Scroll>
        </div>
    );
}

export default App;

