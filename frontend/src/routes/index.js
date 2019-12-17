import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routes';

import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Esquece from '../pages/Esquece';
import Cadastro from '../pages/Cadastro';
import Cotacao from '../pages/Cotacao';
import Relatorio from '../pages/Relatorio';
import Principal from '../pages/Principal';
import Comercio from '../pages/Comercio';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/esquece" component={Esquece} />
        <Route path="/cadastro" component={Cadastro} />
        <Route exact path="/" component={Principal} />
        <Route path="/cotacao" component={Cotacao} isPrivate />
        <Route path="/administrador" component={Admin} isPrivate/>
        <Route path="/relatorio" component={Relatorio} isPrivate />
        <Route path="/comercio" component={Comercio} isPrivate/>
      </Switch>
    </BrowserRouter>
  );
}