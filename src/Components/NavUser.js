import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavUser=({auth,setAuth})=>{
    return(
        <div >
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href ="#home">API</Navbar.Brand >
          <Nav className="me-auto">
             
             <Nav.Link className='islem' as={Link} to= '/' >Home</Nav.Link>

             {
              auth  ?
              <>
              <Nav.Link className='mm'  as={Link} to= '/ListUsers'>Users</Nav.Link>
              <Nav.Link className='dd' onClick={()=>setAuth(false)}  >Logout</Nav.Link>
              </>
              :
              <Nav.Link onClick={()=>setAuth(true)} >Login</Nav.Link>

             }
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default NavUser