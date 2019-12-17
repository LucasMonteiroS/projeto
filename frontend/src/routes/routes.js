import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isTokenExpired, logout, } from '../services/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = !!localStorage.getItem('@CESTA/token');
  //console.log(signed);

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (isTokenExpired()) {
    logout();
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/administrador" />;
  }

  return (
    <>
      <Route {...rest} component={Component} />
    </>
  );
}
