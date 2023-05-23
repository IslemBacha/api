import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"
import Spinner from 'react-bootstrap/Spinner'

const ListUsers=()=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data))
        .then (()=>setLoading(false))       
        .catch((err)=>console.log(err))

    },[])

    return(
        <div>
          {
            loading ?
             <h2 className="rr"> <Spinner animation="border" variant="primary" />
             <Spinner animation="border" variant="secondary" />
             <Spinner animation="border" variant="success" />
             <Spinner animation="border" variant="danger" />
             <Spinner animation="border" variant="warning" />
             <Spinner animation="border" variant="info" />
             <Spinner animation="border" variant="light" />
             <Spinner animation="border" variant="dark" />
             <Spinner animation="grow" variant="primary" />
             <Spinner animation="grow" variant="secondary" />
             <Spinner animation="grow" variant="success" />
             <Spinner animation="grow" variant="danger" />
             <Spinner animation="grow" variant="warning" />
             <Spinner animation="grow" variant="info" />
             <Spinner animation="grow" variant="light" />
             <Spinner animation="grow" variant="dark" /></h2> 
             :
              users.map(el=> <CardUser el={el}/>)
          }
        </div>
    )
}
export default ListUsers