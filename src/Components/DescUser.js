import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

const DescUser=()=>{
    const {id}= useParams()
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))

    },[])
   
    return(
        <div>
                {
            loading ?
             <h2 className="rr"><Spinner animation="border" variant="primary" />
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
              <div className="ee">
               <h1>{user.name}</h1>
               <h2>{user.email}</h2>
               <h3>{user.address.street}</h3>

              </div>
          }
           
        </div>
    )
}
export default DescUser