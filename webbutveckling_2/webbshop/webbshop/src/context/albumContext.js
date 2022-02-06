import { createContext, useState } from "react";

const AlbumContext = createContext({
    productOnCart: [],
    totalAlbumInCart: 0,
    totalSumInCart: 0,
    addProduct: (selectedItem) => { },
    removeProduct: (productId) => { },
    updateProduct: (productId) => { },
    updateProductOnCartWithNewValue: (productId, newValue) => { },
    itemIsOnCart: (productId) => { }
});

export function AlbumContextProvider(props) {
    const [ itemsSelected, setItemsSelected] = useState([]);
    const [ totalAlbum, setTotalAlbum] = useState(0);
    const [ totalSumInCart, setTotalSumInCart] = useState(0);

    function addProductOnCartHandler(selectedItem) {
        let currentItems = [];
        setItemsSelected(prevItemsSelected => {
            currentItems = prevItemsSelected.concat(selectedItem);
            return currentItems;
        });

        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    function removeProductOnCartHandler(productId) {
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            currentItems = prevItemsSelected.filter(product => product.id !== productId );
            return currentItems;
        })

        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    function updateProductOnCartHandler(productId) {
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            for (const product of prevItemsSelected) {
                if (product.id === productId) {
                    product.quantity += 1
                    product.totalSum = product.price * product.quantity;
                }
            }
            currentItems = prevItemsSelected;
            return currentItems;
        })

        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    function updateProductOnCartWithNewValueHandler(productId, newValue) {
        let currentItems = [];

        setItemsSelected(prevItemsSelected => {
            for (const product of prevItemsSelected) {
                if (product.id === productId) {
                    product.quantity = newValue
                    product.totalSum = product.price * product.quantity;
                }
            }
            currentItems = prevItemsSelected;
            return currentItems;
        })

        setTotalAlbum(prevTotalAlbum => {
            prevTotalAlbum = 0;
            for (const product of currentItems) {
                prevTotalAlbum += product.quantity;
            }
            return prevTotalAlbum;
        })

        setTotalSumInCart(prevTotalSumInCart => {
            prevTotalSumInCart = 0;
            for (const product of currentItems) {
                prevTotalSumInCart += product.totalSum;
            }
            return prevTotalSumInCart;
        })
    }

    function itemIsProductOnCartHandler(productId) {
        return itemsSelected.some(product => product.id === productId);
    }

    const context = {
        productOnCart: itemsSelected,
        totalAlbumInCart: totalAlbum,
        totalSumInCart: totalSumInCart,
        addProduct: addProductOnCartHandler,
        removeProduct: removeProductOnCartHandler,
        updateProduct: updateProductOnCartHandler,
        updateProductOnCartWithNewValue: updateProductOnCartWithNewValueHandler,
        itemIsOnCart: itemIsProductOnCartHandler
    };

    return (
        <AlbumContext.Provider value={ context }>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContext;