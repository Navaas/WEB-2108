import './App.css';
import Header from './components/Header/Header'
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage'
import WelcomeMessageTwo from './components/WelcomeMessageTwo/WelcomeMessageTwo'
import WelcomeMessageThree from './components/WelcomeMessageThree/WelcomeMessageThree'

function App() {
    const myName = 'Michaela'
    const myAge = 32

    return (
        <>
            <Header/>
            <WelcomeMessage name={myName} age={myAge}/>
            <WelcomeMessageTwo name={myName} age={myAge}/>
            <WelcomeMessageThree name={myName} age={myAge}/>
        </>
    );
}

export default App;
