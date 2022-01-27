import Card from "./Card";


export default function CardList({dataProducts}) {
    return(
        <>
            {
                dataProducts.map((user, index) => {
                    return (
                        <Card key={ index }
                              id={ dataProducts[index].id }
                              name={ dataProducts[index].name }
                              image={ dataProducts[index].image }
                              price={ dataProducts[index].price }/>
                    )
                })
            }
        </>
    )
}

