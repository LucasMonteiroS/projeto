import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {
  isAuthenticated,
  userLocal,
  isTokenExpired,
  logout,
} from '../services/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isAdmin = false,
  ...rest
}) {
  // const signed = !!localStorage.getItem('@CESTA/token');
  console.log('expired', isTokenExpired());

  if (!isAuthenticated() && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (isTokenExpired()) {
    logout();
    return <Redirect to="/login" />;
  }

  if (isAuthenticated() && !isPrivate) {
    return <Redirect to="/administrador" />;
  }
  // verifica se é admin
  if (isAuthenticated() && isPrivate && isAdmin && !userLocal().isAdmin) {
    return <Redirect to="/administrador" />;
  }

  return (
    <>
      <Route {...rest} component={Component} />
    </>
  );
}
