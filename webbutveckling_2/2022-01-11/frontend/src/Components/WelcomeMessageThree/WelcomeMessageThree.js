import './WelcomeMessageThree.css'

export default function WelcomeMessageThree({name, age}) {
    return (
        <section>
            <h1>Hola {name}</h1>
            <h3>{name} är {age} år gammal</h3>
        </section>
    )
}