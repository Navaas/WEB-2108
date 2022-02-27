import DataCard from "./DataCard";

const DataList = ({todo}) => {
    return (
        <>
            {
                todo.map((item, index)=> {
                    return (
                        <DataCard key={index}
                                  id={item.id}
                                  name={item.name}
                                  todo={item.todo}/>
                    )
                })
            }
        </>
    )
}

export default DataList