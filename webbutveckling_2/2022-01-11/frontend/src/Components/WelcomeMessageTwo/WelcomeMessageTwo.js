import './WelcomeMessageTwo.css'

export default function WelcomeMessageTwo(props) {
    const {name, age} = props
    return (
        <section>
            <h1>
                Hello {name}
            </h1>
            <h1>{name} är {age} år gammal</h1>
        </section>
    )
}