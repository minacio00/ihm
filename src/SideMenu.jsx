import React from "react"
import { Nav } from 'react-bootstrap'

export default function (props) {
    return (
        <Nav bg="dark" style={{ backgroundColor: "#303030", height: "100%" }} className="sideMenu">
            <div style={{ color: "white", width: "100%" }}>
                <Nav.Link href="/clientes" style={{ marginTop: "15%", color: "white" }}> Clientes</Nav.Link>
                <Nav.Link href="/endereco" style={{ color: "white" }}> Cadastro de Endereço </Nav.Link>
                <hr />
                <Nav.Link href="/produto/hardware" style={{ color: "white" }}> Cadastro de Hardware </Nav.Link>
                <Nav.Link href="/produto/software" style={{ color: "white" }}> Cadastro de Software </Nav.Link>
                <hr />
            </div>
        </Nav >
    )
}
