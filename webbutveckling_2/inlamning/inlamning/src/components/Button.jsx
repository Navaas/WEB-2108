import css from './Button.module.css'
import {useContext, useState} from "react";
import AlbumContext from "../context/AlbumContext";


export default function Button(props){
    const albumToCart = useContext(AlbumContext);
    const albumIsOnCart = albumToCart.albumIsOnCart(props.id);

    function toggleProductOnCart(){
        if (albumToCart) {
            albumIsOnCart(props.id)
        } else {
            albumToCart.addAlbum({
                id: props.id,
                image: props.image,
                artist: props.artist,
                album: props.album,
                price: props.price,
            });
        }
    }
    return(
        <button>Köp</button>
    )
}