export default function Card({id, name, email}) {
    return (
        <article className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size 200x200px` } alt="robot"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
</article>
    )
}