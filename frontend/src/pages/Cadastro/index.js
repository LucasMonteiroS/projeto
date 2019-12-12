import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";

export default function Cadastro({ history }) {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    senha: '',
    isAdmin: false,
  });
  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }
  function handleInputCheckChange(e) {
    const { id } = e.target;
    setUser({
      ...user,
      [id]: !user.isAdmin,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await api.post("/user", user);
      history.push("/login");
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
          <input id="nome" type="text" placeholder="LucasMs" value={user.nome} onChange={handleInputChange} required />
          <label>E-mail:</label>
          <input id="email" type="email" placeholder="Ex. Lucas.Silva@novaandradina.org" value={user.email} onChange={handleInputChange} required />
          <label>Senha:</label>
          <input id="senha" type="password" placeholder="Ex. 123456789" value={user.senha} onChange={handleInputChange} required />
          <label htmlFor="isAdmin">Administrador</label>
          <input id="isAdmin" type="checkbox" onChange={handleInputCheckChange} />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/login">Voltar para a Autenticação</Link></button>
        </form>
      </div>
    </Container>
  );
}