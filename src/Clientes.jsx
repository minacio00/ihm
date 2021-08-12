import React from "react"
import {
    Navbar, Nav, NavDropdown,Container,
    Form ,Button,Table
} from 'react-bootstrap'
import { Link } from "react-router-dom";

import './Clientes.css'

import { useEffect,useState } from 'react';
 

export default function(){
    document.title = "Clientes";
    return(
       <>
        <div className="barra">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Clientes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
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
            <Link  to={{pathname: '/Cadastro'}}>Novo cliente</Link>
        </div>
    </>
    )
}