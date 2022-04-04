import DataCard from "../dataCard/DataCard";

const DataList = ({todo}) => {
    return (
        <>
            {
                todo.map((item, index) => {
                    return (
                        <DataCard key={index}
                                  _id={item._id}
                                  name={item.name}
                                  todo={item.todo}
                                  done={item.done}/>
                    )
                })
            }
        </>
    )
}

export default DataList