import React from "react"
import { useHistory } from "react-router";
import { Form, Button } from 'react-bootstrap'


export default function () {
    document.title = "Cadastro";


    return (
        <>
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
                    <Button variant="primary" type="submit">
                        Registrar-se
                    </Button>

                </Form>
            </div>

        </>
    )

}
