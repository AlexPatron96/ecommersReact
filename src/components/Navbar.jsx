import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/logoPage.css'
import '../style/navStyles.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SidebarCarShop from './SidebarCarShop';


function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Navbar bg="danger" expand="lg" sticky="top" >
                <Container>
                    <Navbar.Brand className='logo-page' href="/">
                        <h1>Boss<span>Design</span></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#/purchases">Purchases </Nav.Link>
                            <Nav.Link onClick={handleShow} >Car <i className='bx bx-shopping-bag' ></i> </Nav.Link>
                            <Nav.Link href="#/login">Login <i className='bx bx-log-in' ></i></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SidebarCarShop show={show} handleClose={handleClose} handleShow={handleShow}></SidebarCarShop>
        </>
    );
}

export default NavBar;