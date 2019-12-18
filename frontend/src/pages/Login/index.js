import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post("/session", {
        email,
        senha
      });
      const { token, user: userData } = response.data;

      if (token) {
        localStorage.setItem("@CESTA/token", token, userData);
      }

        localStorage.setItem("@CESTA/user", JSON.stringify(response.data.user));


      history.push("/administrador");
    } catch (erro) {
      alert("Email ou senha inválidos");
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
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" value={email} onChange={event => setEmail(event.target.value)} required />
          <label>Senha:</label>
          <input id="password" type="password" placeholder="Ex. 123456789" value={senha} onChange={event => setSenha(event.target.value)} required />
          <button type="submit">Entrar</button>
          <button><Link className="link" to="/cadastro">Cadastrar Usuário</Link></button>
          <button><Link className="link" to="/esquece">Esqueceu sua Senha?</Link></button>
        </form>
      </div>
    </Container>
  );
}
