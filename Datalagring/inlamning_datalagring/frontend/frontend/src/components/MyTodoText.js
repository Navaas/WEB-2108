import pencil from '../utils/global/image/pencil.png'
import css from '../components/MyTodoText.module.css'

export default function MyTodoText() {
    return (
        <>
            <span className={css.span}>
                <h1>Min TodoLista....<img src={pencil} alt="pencil" className={css.imagePencil}/></h1>
            </span>
        </>
    )
}