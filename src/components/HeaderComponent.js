import React from 'react';
import { Navbar, Nav, NavItem, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header(){

    return(
        <>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Container>
            <Navbar.Brand href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavItem>
                    <Link className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
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