import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar id="nav-bar" bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Daniel Ezekiel </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/portfolio/">Home</Nav.Link>
                        <Nav.Link href="#contact-info">Contact Info</Nav.Link>
                        <NavDropdown title="Links" id="dropdown">
                            <NavDropdown.Item href="https://docs.google.com/document/d/16lquF6AVro1paGDsmO8yIfojx5seNtDY/edit?usp=sharing&ouid=101263549633324859001&rtpof=true&sd=true">Resume</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://secure-forest-02892.herokuapp.com">FineArt</NavDropdown.Item>
                            <NavDropdown.Item href="https://pure-temple-59698.herokuapp.com">Message Board</NavDropdown.Item>
                            <NavDropdown.Item href="https://dannyblaz.github.io/food-project/">Food</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;