import logo from './logo.svg';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cadastro from './Cadastro';
import { BrowserRouter,Route } from 'react-router-dom';
import Clientes from './Clientes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Cadastro }  path="/cadastro" />
           <Route component = { Clientes }  path="/clientes" />
       </BrowserRouter>
    </div>
  );
}

export default App;
