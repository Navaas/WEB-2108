import { createContext, useState } from "react";

const AlbumContext = createContext({
    productOnCart: [],
    totalProductOnCart: 0,
    addProduct: (selectedItem) => { },
    removeProduct: (productId) => { },
    itemIsOnCart: (productId) => { },
});

export function AlbumContextProvider(props) {
    const [ itemsSelected, setItemsSelected ] = useState([]);

    function addProductOnCartHandler(selectedItem) {
        console.log(selectedItem)
        setItemsSelected((prevItemsSelected) => {
            return prevItemsSelected.concat(selectedItem);
        });
    }

    function removeProductOnCartHandler(productId) {
        setItemsSelected(prevItemsSelected => {
            return prevItemsSelected.filter(product => product.id !== productId );
        })
    }

    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

    const context = {
        productOnCart: itemsSelected,
        totalProductOnCart: itemsSelected.length,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        itemIsOnCart: itemIsProductOnCartHandler,
    };

    return (
        <AlbumContext.Provider value={ context }>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;