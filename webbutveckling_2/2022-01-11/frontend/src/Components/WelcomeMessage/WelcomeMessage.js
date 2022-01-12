import './WelcomeMessage.css'

export default function WelcomeMessage(props) {

    return (
        <section>
            <h1>Välkommen {props.name}</h1>
            <h3>{props.name} är {props.age} år gammal</h3>
        </section>
    )
}

