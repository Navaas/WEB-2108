import css from './SearchBox.module.css'
import dataProducts from "../../utils/data/dataProducts";
import {useState} from "react";

export default function SearchBox(){

    const [searchField, setSearchField] = useState('')

    const filteredAlbums = dataProducts.filter(album => {
        return album.id.includes(searchField)
    })

    return(
        <section className={css.section}>
            <input className={css.input}
                   type='search'
                   placeholder='Sök produkt'
                   value={searchField}
                   onChange={event => setSearchField(event.target.value)}/>
        </section>
    )
}

