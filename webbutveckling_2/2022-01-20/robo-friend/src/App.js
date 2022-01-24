import robots from "./utils/data/Robots";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";

function App() {
    return (
        <div className='tc'>
            <h1 className='robo-logo f1'>Robofriends</h1>
            <Scroll>
                <CardList robots={robots}/>
            </Scroll>
        </div>
    );
}

export default App;

