import CardList from "../components/CardList";
import dataProducts from "../utils/data/dataProducts";

export default function ProdukterView() {
    return(
        <main>
            <h1>Produkter</h1>
            <CardList dataProducts={dataProducts}/>
        </main>
    )
}