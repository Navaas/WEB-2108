import css from './Button.module.css'
import {useContext, useState} from "react";
import {AlbumContext} from "../context/AlbumContext";


export default function Button(props){
    // const [selectedItem, setSelectedItem] = useContext(AlbumContext);
    // const albumIsOnCart = selectedItem(props.id);
    //
    // function toggleProductOnCart(){
    //     if (albumToCart) {
    //         albumIsOnCart(props.id)
    //     } else {
    //         albumToCart.addAlbum({
    //             id: props.id,
    //             image: props.image,
    //             artist: props.artist,
    //             album: props.album,
    //             price: props.price,
    //         });
    //     }
    // }

    return(
        <button className={ css.byeButton }>Köp</button>
    )
}