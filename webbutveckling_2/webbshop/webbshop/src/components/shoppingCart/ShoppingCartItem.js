export default function ShoppingCartItem(props){

    return(
        <div >
            <ul >
                <li >
                    <img
                        src={props.image}
                        alt={props.name}/>
                    <p>Name: <span >{props.name}</span></p>
                    <p>Price: <span >{props.price}</span> Kr </p>
                    <input  type="number" name="amount" value="1"
                    />
                    <p ><span>Total value</span> Kr</p>
                    <button  id={props.id} type="button" >X</button>
                </li>
            </ul>
        </div>


    )
}
