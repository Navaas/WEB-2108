

export default function Card({ name, image, price }) {
    return(
        <>
            <article className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <div>
                    <h2>{ name }</h2>
                    <h2>{ image }</h2>
                    <h2>{ price }</h2>
                </div>
            </article>
        </>
    )
}

