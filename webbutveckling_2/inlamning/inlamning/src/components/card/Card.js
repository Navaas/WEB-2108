import css from './Card.module.css'
import Button from "../Button";

export default function Card({name, image, price}) {
    return (
        <>
            <article>
                <img className={css.image} src={image} alt="product1"/>
                <h2>{name}</h2>
                <h2>{price}Kr</h2>
                <Button/>
            </article>
        </>
    )
}

