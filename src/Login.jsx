import React from "react"
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./Login.css"

export default function () {
    document.title = "Login";

    return (
        <>
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
                    <Link to={{ pathname: '/Cadastro' }}>Registrar-se</Link>
                    <Button variant="primary" type="submit">
                        Logar
                    </Button>

                </Form>
            </div>
        </>
    )
}