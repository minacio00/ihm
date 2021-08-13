import React from "react"
import {
    Navbar, Nav, NavDropdown, Container, Form
    , Button
} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

export default function () {
    document.title = "Login";




    return (
        <>
            <div className="barra">
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#080808" }}>
                    <Container>
                        <Navbar.Brand href="/">Login</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Features</Nav.Link>
                                <Nav.Link href="/">Pricing</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}