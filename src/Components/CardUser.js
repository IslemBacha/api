import { Link } from "react-router-dom"
const CardUser=({el})=>{
   
    return(
        <div className="aa">
            <h2><Link to={`/descuser/${el.id}`}>{el.name}</Link></h2>
        </div>
    )
}
export default CardUser