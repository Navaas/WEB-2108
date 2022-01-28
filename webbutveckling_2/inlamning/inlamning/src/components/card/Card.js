import './Card.css'

export default function Card({name, image, price}) {
    return (
        <>
            <main >
                <div className='grid-container'>
                    <article>
                        <h2>{name}</h2>
                        <img className='image' src={image} alt="product1"/>
                        <h2>{price}Kr</h2>
                        <button>Köp</button>
                    </article>
                </div>
            </main>
        </>
    )
}

