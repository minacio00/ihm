import logo from './logo.svg';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastro from './Cadastro';
import { BrowserRouter, Route } from 'react-router-dom';
import Clientes from './Clientes';
import Produto from './Produto';
import Endereco from './Endereco';
import SideMenu from './SideMenu';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

function App() {
  return (
    <Container fluid id="containerApp">
      <Header />
      <Row style={{ padding: "0px", height: "99vh" }}>
        <Col md={2} style={{ padding: "0px" }} className="s">
          <SideMenu component={SideMenu} />
        </Col>
        <Col md={10} style={{ padding: "0px" }}>
          <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Cadastro} path="/cadastro" />
            <Route component={Clientes} path="/clientes" />
            <Route component={Endereco} path="/endereco" />
            <Route path="/produto/hardware" render={(props) => (
              <Produto {...props} productType={"HARDWARE"} />
            )} />
            <Route path="/produto/software" render={(props) => (
              <Produto {...props} productType={"SOFTWARE"} />
            )} />
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
