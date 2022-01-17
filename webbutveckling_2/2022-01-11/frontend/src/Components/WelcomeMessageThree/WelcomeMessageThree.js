import './WelcomeMessageThree.css'

export default function WelcomeMessageThree({name, age}) {
    return (
<section>
    <h1>Hola {name}</h1>
    <h1>{name} är {age} år gammal</h1>
</section>
    )
}