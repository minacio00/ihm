import React from "react"
import { useHistory } from "react-router";
import {
    Form, Button
} from 'react-bootstrap'


export default function (props) {
    document.title = "Cadastro de Produto";
    return (
        <>
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
                        Registrar
                    </Button>

                </Form>
            </div>

        </>
    )

}
