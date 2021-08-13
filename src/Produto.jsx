import React from "react"
import { useHistory } from "react-router";
import {
    Navbar, Nav, NavDropdown, Container, Form
    , Button
} from 'react-bootstrap'
import { useEffect, useState } from 'react';


export default function (props) {
    document.title = "Cadastro de Produto";

    console.log(props.productType);
    return (
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
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control type="number" min="1" step="any" placeholder="Preço" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control type="number" placeholder="Quantidade" min="1" />
                    </Form.Group>
                    {props.productType == "HARDWARE" ?
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Método de montagem</Form.Label>
                            <Form.Control type="text" placeholder="Método de montagem" />
                        </Form.Group> : null
                    }
                    {props.productType == "SOFTWARE" ?
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Versão</Form.Label>
                            <Form.Control type="text" placeholder="Versão" />
                        </Form.Group>
                        : null
                    }
                    {props.productType == "SOFTWARE" ?
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Linguagem</Form.Label>
                            <Form.Control type="text" placeholder="Linguagem" />
                        </Form.Group> : null
                    }
                    {props.productType == "SOFTWARE" ?
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" placeholder="Tipo" />
                        </Form.Group> : null
                    }

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textArea" rows={5} type="text" placeholder="Descrição" />
                    </Form.Group>

                    {/* <Link  to={{pathname: '/Cadastro'}}>Registrar-se</Link> */}
                    <Button variant="primary" type="submit">
                        Registrar-se
                    </Button>

                </Form>
            </div>

        </>
    )

}
