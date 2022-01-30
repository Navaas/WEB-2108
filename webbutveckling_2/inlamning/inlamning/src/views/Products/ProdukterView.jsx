import CardList from "../../components/card/CardList";
import dataProducts from "../../utils/data/dataProducts";
import css from './ProdukterView.module.css'

export default function ProdukterView() {

    return (
        <main className={css.containerGrid}>
            <section>
            </section>
            <div className={css.gridContainer}>
                <CardList dataProducts={dataProducts}/>
            </div>
            <section>
            </section>
        </main>
    )
}