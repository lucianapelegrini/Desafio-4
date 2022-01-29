import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './Components/Menu';
import { Item } from './views/Servico/Item';

import { ListarCliente } from './views/Cliente/ListarCliente';
import { EditarCliente } from './views/Cliente/EditarCliente';
import { InserirCliente } from './views/Cliente/InserirCliente';
import { NovoCliente } from "./views/Cliente/Cadastrar";
import { AtualizarCliente } from "./views/Cliente/AtualizarCliente";
import { ListarServico } from './views/Servico/ListarServico/';
import { ListarPedido } from './views/Pedido/ListarPedido/';
import { Cadastrar } from './views/Servico/Cadastrar';
import { Pedidos } from './views/Cliente/ListarCliente/Pedidos';
import { NovoPedido } from "./views/Pedidos/Cadastrar";
import { Pedidos } from "./views/Pedidos/Pedidos";
import { Pedido } from "./views/Pedidos/Consultar";
import { AtualizarPedido } from "./views/Pedidos/Atualizar";
import { NovoServico } from "./views/Servicos/Cadastrar";
import { Servicos } from "./views/Servicos/Servicos";
import { ItemPedido } from "./views/Servicos/Consultar";
import { AtualizarServico } from "./views/Servicos/Atualizar";
import { NovoProduto } from "./views/Produtos/Cadastrar";
import { Produtos } from "./views/Produtos/Produtos";
import { ItemCompra } from "./views/Produtos/Consultar";
import { AtualizarProduto } from "./views/Produtos/Atualizar";
import { NovaCompra } from "./views/Compras/Cadastrar";
import { Compras } from "./views/Compras/Compras";
import { Compras } from "./views/Compras/Consultar";
import { AtualizarCompra } from "./views/Compras/Atualizar";


function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ListarCliente}/>
          <Route path="/pedidos-clientes/:id" component={Pedidos}/>
          <Route path="/listar-servico" component={ListarServico}/>
          <Route path="/listar-pedido" component={ListarPedido}/>
          <Route path="/listar-ped/:id" component={Item}/>
          <Route path="/cadastrar-servico" component={Cadastrar}/>
          <Route path="/inserir-cliente" component={InserirCliente}/>
          <Route path="/editar-pedido/:id" component={EditarCliente}/>
          <Route path="/novo-cliente" component={NovoCliente}/>
          <Route path="/atualizar-cliente" component={AtualizarCliente}/>
          <Route path="/atualizar-servico" component={AtualizarServico}/>
          <Route path="/clientes/:id" component={Clientes}/>
          <Route path="/clientes" component={Clientes}/>
          <Route path="/atualizar-cliente/:id" component={AtualizarCliente}/>
          <Route path="/novo-pedido" component={NovoPedido}/>
          <Route path="/pedidos/:id" component={Pedido}/>
          <Route path="/pedidos" component={Pedidos}/>
          <Route path="/atualizar-pedido/:id" component={AtualizarPedido}/>
          <Route path="/novo-servico" component={NovoServico}/>
          <Route path="/servicos/:id/pedidos" component={ItemPedido}/>
          <Route path="/servicos" component={Servicos}/>
          <Route path="/atualizar-servico/:id" component={AtualizarServico}/>
          <Route path="/novo-produto" component={NovoProduto}/>
          <Route path="/produtos/:id/compras" component={ItemCompra}/>
          <Route path="/atualizar-produto/:id" component={AtualizarProduto}/>
          <Route path="/nova-compra" component={NovaCompra}/>
          <Route path="/compras" component={Compras}/>
          <Route path="/atualizar-compra/:id" component={AtualizarCompra}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
