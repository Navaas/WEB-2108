import CardItem from "./CardItem";
import dataAlbum from "../../utils/data/dataALbum";


export default function CardList (props) {
    return (
        <div className='tc ba b--red br3 pa3'>
            {
                dataAlbum.map((user, index) => {
                    return (
                        <CardItem key={ index }
                                  id={ dataAlbum[index].id }
                                  image={ dataAlbum[index].image }
                                  name={ dataAlbum[index].name }
                                  price={ dataAlbum[index].price }
                        />
                    )
                })
            }
        </div>
    )
}
