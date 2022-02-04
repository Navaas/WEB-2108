import { createContext, useState } from "react";

const AlbumContext = createContext({
    albumToCart: [],
    totalAlbumToCart: 0,
    addAlbum: (itemSelected) => { },
    removeAlbum: (albumId) => { },
    albumIsOnCart: (albumId) => { },
});

export function AlbumContextProvider(props) {
    const [ selectedItem, setSelectedItem ] = useState([]);

    function addAlbumToCart(itemSelected) {
        setSelectedItem((prevItemsSelected) => {
            return prevItemsSelected.concat(itemSelected);
        });
    }

    function removeAlbumFromCart(albumId) {
        setSelectedItem(prevItemsSelected => {
            return prevItemsSelected.filter(album => album.id !== albumId );
        })
    }

    function itemIsAlbumToCart(albumId) {
        return selectedItem.some(album => album.id === albumId);
    }

    const context = {
        albumToCart: selectedItem,
        totalAlbumToCart: selectedItem.length,
        addAlbums: addAlbumToCart,
        removeAlbum: removeAlbumFromCart,
        albumIsOnCart: itemIsAlbumToCart,
    };

    return (
        <AlbumContext.Provider value={ context }>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;