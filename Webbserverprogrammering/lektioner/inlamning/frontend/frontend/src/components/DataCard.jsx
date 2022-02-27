import '../utils/global/css/global.css'

const DataCard = ({name, todo}) => {
    return (
            <p>{todo} {name}</p>
    )
}

export default DataCard