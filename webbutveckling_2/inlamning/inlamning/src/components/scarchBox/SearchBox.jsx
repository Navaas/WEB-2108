import css from './SearchBox.module.css'

export default function SearchBox({setSearchField}){
    return(
        <section className={css.section}>
            <input className={css.input}
                   type='search'
                   placeholder='Sök produkt'
                   onChange={event => setSearchField(event.target.value)}/>
        </section>
    )
}

