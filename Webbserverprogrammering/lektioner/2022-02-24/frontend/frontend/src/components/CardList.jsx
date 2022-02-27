import DataCard from './DataCard'

const CardList = ({ users }) => {
    return(
        <>
            {
                users.map((user, index) =>{
                    return (
                        <DataCard key={ index}
                              name={ user.name }
                              age={ user.age }
                              gender={ user.gender}/>
                    )
                })
            }
        </>
    )
}

export default CardList