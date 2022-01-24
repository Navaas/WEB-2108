import classes from './Scroll.module.css'

export default function Scroll({ children }){
    return(
        <section className={classes.scrollWindow}>
            { children }
        </section>
    )
}