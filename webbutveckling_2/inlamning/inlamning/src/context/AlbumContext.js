import {createContext, useContext, useState} from "react";

export class AlbumInCart {
     constructor(id, name, image, price) {
         this.id = id
         this.name = name
         this.image = image
         this.price = price
         this.quantity = 1
         this.totalSum = price
     }
}

export const AlbumContext = createContext({
    albumToCart: [],
    totalAlbumToCart: 0
});

export function AddAlbumToCart(id, name, image, price) {
    const [selectedItem, setSelectedItem] = useContext(AlbumContext);

    let existInCart = false

    for (const item of selectedItem.albumToCart) {
        if (item.id === id) {
            item.quantity += 1
            item.totalSum = item.price * item.quantity;
            existInCart = true;
        }
    }

    if (existInCart === false) {
        let newAlbum = new AlbumInCart(id, name, image, price)
        selectedItem.albumToCart.push(newAlbum)
    }

    setSelectedItem(selectedItem)
}

// export function removeAlbumFromCart(albumId) {
//      setSelectedItem(prevItemsSelected => {
//          return prevItemsSelected.filter(album => album.id !== albumId );
//      })
// }
//
// export function itemIsAlbumToCart(albumId) {
//      return selectedItem.some(album => album.id === albumId);
// }

export function AlbumContextProvider(props) {
    const [ selectedItem, setSelectedItem ] = useState([]);

    return (
        <AlbumContext.Provider value={ [selectedItem, setSelectedItem] }>
            {props.children}
        </AlbumContext.Provider>
    )
}