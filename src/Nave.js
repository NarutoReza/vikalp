import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
function Nave() {
    return (
        <>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admit Card Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/download-admit">Download Admit</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>

        <Outlet />
      </>
    );

    }
    
export default Nave;