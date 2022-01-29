import css from './SearchBox.module.css'

const searchBox=({setSearchField}) => {
    return(
        <section className={css.section}>
            <input className={css.input}
                   type='search'
                   placeholder='Sök produkt'
                   onChange={event => setSearchField(event.target.value)}/>
        </section>
    )
}

export default searchBox