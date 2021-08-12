import React from "react"
import {Navbar, Nav, NavDropdown,Container,Form
,Button} from 'react-bootstrap'
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

export default function (){
    document.title = "Login";




    return(
       <>
        <div className="barra">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

     <div className="formulario">
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@exemplo.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Link  to={{pathname: '/Cadastro'}}>Registrar-se</Link>
            <Button variant="primary" type="submit">
                Logar
            </Button>
            
        </Form>
      </div>
      </>
    )
}