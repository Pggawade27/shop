import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';


function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar mb-5 py-4">
            <Container>
                <Navbar.Brand><h4><span className='bg-primary text-white px-3'>APNA</span><span>STORE</span></h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5 d-flex gap-5">
                        <NavLink to='/' style={{ textDecoration: "none", color: "black" }}><p>Home</p></NavLink>
                        <NavLink to='/about' style={{ textDecoration: "none", color: "black" }}><p>About</p></NavLink>
                        <NavLink to='/contact' style={{ textDecoration: "none", color: "black" }}><p>Contact</p></NavLink>
                        <NavLink to='/products' style={{ textDecoration: "none", color: "black" }}><p>Products</p></NavLink>
                    </Nav>
                    <Nav className='d-flex gap-3'>
                        <NavLink to='/signup'><Button color='primary' type='Login'>Login</Button></NavLink>
                        <NavLink to='/signup'><Button color='primary' type='Signup' outline >Signup</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;