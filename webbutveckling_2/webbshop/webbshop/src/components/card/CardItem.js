import { useContext} from "react";
import AlbumContext from "../../context/albumContext";
import css from './CardItem.module.css'

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
        <article>
            <div>
                <img className={ css.image } src={props.image} alt={props.name}/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.price} Kr</p>
            </div>
            <div>
                <button id={props.id} onClick={toggleProductOnCartStatusHandler}>{itemIsOnCart ? 'Remove from Cart' : 'BUY'}</button>
            </div>
        </article>
    )
}
