import { useContext} from "react";

import AlbumContext from "../../context/albumContext";


export default function CardItem(props) {
    const productOnCartCtx = useContext(AlbumContext);

    const itemIsOnCart = productOnCartCtx.itemIsOnCart(props.id);

    function toggleProductOnCartStatusHandler(){
        if (itemIsOnCart) {
            productOnCartCtx.removeProduct(props.id)
        } else {
            productOnCartCtx.addProduct({
                id: props.id,
                image: props.image,
                artist: props.artist,
                album: props.album,
                price: props.price,
            });
        }

    }


    return (
        <article  >
            <div  className='tc bg-washed-yellow br3 pa3 ma2 dib bw2 shadow-5  '>
                <img src={props.image} alt={props.name}/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>Price:{props.price} Kr</p>
            </div>
            <div>
                <button id={props.id} onClick={toggleProductOnCartStatusHandler}>{itemIsOnCart ? 'Remove from Cart' : 'BUY'}</button>
            </div>
        </article>
    )
}
