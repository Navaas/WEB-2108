import './WelcomeMessage.css'

export default function WelcomeMessage(props) {

    return (
        <section>
    <h1>Välkommen {props.name}</h1>
            <h1>{props.name} är {props.age} år gammal</h1>
        </section>
    )
}

