import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
export default function Esquece() {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Esqueceu sua Senha?</h1>
      </header>
      <div>
        <form>
          <label>Será enviado uma nova senha para acesso em seu E-mail</label>
          <label>Digite seu E-mail:</label>
          <input type="text" placeholder="Ex. Lucas.Silva@novaandradina.org" />
          <button type="submit">Enviar</button>
          <button><Link className="link" to="/">Voltar para a Autenticação</Link></button>
        </form>
      </div>
    </Container>
  );
}