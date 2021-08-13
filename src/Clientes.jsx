import React from "react"
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

import './Clientes.css'

export default function () {
    document.title = "Clientes";
    return (
        <>
            <div className="tabela">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Rg</th>
                            <th>Celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Amado</td>
                            <td>6666666</td>
                            <td>62999999995</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <Link to={{ pathname: '/Cadastro' }}>Novo cliente</Link>
            </div>
        </>
    )
}