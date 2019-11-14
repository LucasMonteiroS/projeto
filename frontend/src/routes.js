import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";

import Principal from "./pages/Principal/";

import Esquece from "./pages/Esquece";

import Cadastro from "./pages/Cadastro";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Usuario/token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/esquece" component={Esquece} />

        <Route path="/cadastro" component={Cadastro} />

        <PrivateRoute path="/principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}
