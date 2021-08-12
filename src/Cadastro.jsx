import React from "react"
import { useHistory } from "react-router";
import {Navbar, Nav, NavDropdown,Container,Form
,Button} from 'react-bootstrap'
import { useEffect,useState } from 'react';


export default function (){
    document.title = "Cadastro";

    
    

    return(
        <>
            <div className="barra">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Cadastro</Navbar.Brand>
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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rg</Form.Label>
                    <Form.Control type="text" placeholder="Rg" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="tel" placeholder="Celular" pattern="[0-9]{2}[0-9]{9}" />
                    <Form.Text>ddd+telefone ex:62999999999</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Rua" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    {/* <Link  to={{pathname: '/Cadastro'}}>Registrar-se</Link> */}
                    <Button variant="primary" type="submit" onClick={/*RouteChange()*/}>
                        Registrar-se
                    </Button>
                    
                </Form>
      </div>

        </>
    )

}
