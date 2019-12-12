import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
export default function Principal() {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Sistema Cesta Básica</h1>
      </header>
      <button><Link className="link" to="/login">Login</Link></button>
    </Container>
  );
}