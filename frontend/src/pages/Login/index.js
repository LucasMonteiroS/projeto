import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = new useState("")

  const [senha, setSenha] = new useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = {
        email,
        senha
      }
      const response = await api.post("/session", user);
      const token = response.data.token;
      if(token){
        localStorage.setItem("Usuario/token", token)
      }
      history.push("/principal");
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
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label>Senha:</label>
          <input id="password" type="password" placeholder="Ex. 123456789" value={senha} onChange={(event) => setSenha(event.target.value)} required />
          <button type="submit">Entrar</button>
          <button><Link className="link" to="/cadastro">Cadastrar Usuário</Link></button>
          <button><Link className="link" to="/esquece">Esqueceu sua Senha?</Link></button>
        </form>
      </div>
    </Container>
  );
}
