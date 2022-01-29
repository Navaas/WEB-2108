import Card from "./Card";


export default function CardList({dataProducts}) {
    return(
        <>
            {
                dataProducts.map((user, index) => {
                    return (
                        <Card key={ index }
                              id={ dataProducts[index].id }
                              image={ dataProducts[index].image }
                              name={ dataProducts[index].name }
                              price={ dataProducts[index].price }/>
                    )
                })
            }
        </>
    )
}

