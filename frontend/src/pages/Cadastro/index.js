import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

export default function Cadastro({ history }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/user", {
        nome,
        email,
        senha,

      })
      history.push("/login");
    } catch (erro) {
      alert("Erro ao cadastrar usuário")
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
          <input id="nome" type="text" placeholder="LucasMs" onChange={event => setNome(event.target.value)} value={nome} required />
          <label>E-mail:</label>
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" onChange={event => setEmail(event.target.value)} value={email} required />
          <label>Senha:</label>
          <input id="senha" type="password" placeholder="Ex. 123456789" onChange={event => setSenha(event.target.value)} value={senha} required />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/login">Voltar para a Autenticação</Link></button>
        </form>
      </div>
    </Container>
  );
}