import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";
import { login } from "../../services/auth";

export default function Login({ history }) {
  const [user, setUser] = useState({ email: '', senha: '' });
  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await api.post("/session", user);
      const { token, user: userData } = response.data;
      if (token) {
        login(token, userData);
      }
      history.push("/administrador");
    } catch (erro) {
      console.log("Erro na autenticação", erro);
      alert("Erro na autenticação");
    }
  }
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Efetuar Autenticação</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label>E-mail:</label>
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" value={user.email} onChange={handleInputChange} required />
          <label>Senha:</label>
          <input id="password" type="password" placeholder="Ex. 123456789" value={user.senha} onChange={handleInputChange} required />
          <button type="submit">Entrar</button>
          <button><Link className="link" to="/cadastro">Cadastrar Usuário</Link></button>
          <button><Link className="link" to="/esquece">Esqueceu sua Senha?</Link></button>
        </form>
      </div>
    </Container>
  );
}
