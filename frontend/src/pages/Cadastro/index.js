import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

export default function Cadastro({ history }) {
  const [nome, setNome] = new useState("")

  const [email, setEmail] = new useState("")

  const [senha, setSenha] = new useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = {
        nome,
        email,
        senha
      }
      await api.post("/user", user);
      history.push("/");
    } catch (erro) {
      console.log("Erro no cadastro do usuário", erro);
    }
  }
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Cadastrar um novo Usuário</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nome de Usuário:</label>
          <input id="nome" type="text" placeholder="LucasMs" value={nome} onChange={(event) => setNome(event.target.value)} required />
          <label>E-mail:</label>
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label>Senha:</label>
          <input id="password" type="password" placeholder="Ex. 123456789" value={senha} onChange={(event) => setSenha(event.target.value)} required />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/">Voltar para a Autenticação</Link></button>
        </form>
      </div>
    </Container>
  );
}