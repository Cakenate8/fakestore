import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {


    return (

        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="/">FakeStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <NavDropdown title="Edit Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addproduct">
                                Add products
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/editproduct/1">Edit Products</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;