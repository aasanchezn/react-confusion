import React,{useState} from 'react';
import { Navbar, Nav, NavItem, Container,Button,Modal,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IoIosLogIn } from 'react-icons/io';
import {BsFillHouseDoorFill,BsFillPersonLinesFill}  from 'react-icons/bs';
import {MdRestaurant} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa';

function Header(){

    // Modal:
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    function handleLogin(event) {
        event.preventDefault();
        alert("Formulario enviado");
        handleClose ();
    }

    return(
        <>

        {/* -------- Modal ---------  */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" id="username" name="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="password" name="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"  name="remember" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>

                </Form>
            </Modal.Body>
        </Modal>
        {/* ---------End Modal------ */}


        <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
            <Navbar.Brand href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavItem>
                    <Link className="nav-link"  to='/home'><BsFillHouseDoorFill/> Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/aboutus'><BsFillPersonLinesFill/> About Us</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"  to='/menu'><MdRestaurant/> Menu</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/contactus'><FaUsers/> Contact Us</Link>
                </NavItem>
                </Nav> 
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button variant="outline-light" className="btn-login" onClick={handleShow}>
                            <IoIosLogIn /> Login
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      <div className="p-5 mb-4 rounded-3 jumbotron">
      <div className="container-fluid py-5">
            <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
      </div>
    </div>
        </>
        );}

export default Header;