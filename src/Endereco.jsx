import React from "react"
import { useHistory } from "react-router";
import {
    Navbar, Nav, NavDropdown, Container, Form
    , Button
} from 'react-bootstrap'


export default function (props) {
    document.title = "Cadastro de Endereco";

    console.log(props.productType);
    return (
        <>
            <div className="formulario">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Endereço" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Setor</Form.Label>
                        <Form.Control type="text" placeholder="Setor" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" placeholder="Complemento" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control as="input" type="text" placeholder="Ex.:0000-000" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Cidade" />
                    </Form.Group>

                    {/* <Link  to={{pathname: '/Cadastro'}}>Registrar-se</Link> */}
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>

                </Form>
            </div>

        </>
    )

}
