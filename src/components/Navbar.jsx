import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/logoPage.css'
import '../style/navStyles.css'
function NavBar() {
    return (
        <Navbar bg="danger" expand="lg"  sticky="top">
            <Container>
                <Navbar.Brand className='logo-page' href="/">
                    <h1>Boss<span>Design</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#/purchases">Purchases </Nav.Link>
                        <Nav.Link href="#/car">Car <i className='bx bx-shopping-bag' ></i> </Nav.Link>
                        <Nav.Link href="#/login">Login <i className='bx bx-log-in' ></i></Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;