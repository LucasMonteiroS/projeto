import React, { useState } from 'react';
import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Comercio({ history }) {
  const [nome, setNome] = useState("");
  const [nome_rua, setNome_rua] = useState("");
  const [numero_rua, setNumero_rua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/commerce", {
        nome,
        nome_rua,
        numero_rua,
        bairro,
        cidade,
        estado,
      }
      )
      history.push("/administrador");
      alert("Cadastrado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar comércio")
    }
  }

  return (
    <Container>
      <header className="cabeçalho">
        <h1>Cadastrar um novo comércio</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nome do comérico:</label>
          <input type="text" placeholder="Mercado do fer" onChange={event => setNome(event.target.value)} value={nome} />
          <label>Nome da rua:</label>
          <input type="text" required placeholder="Nome da rua do fer" onChange={event => setNome_rua(event.target.value)} value={nome_rua} />
          <label>Número da rua:</label>
          <input type="text" required placeholder="Numero do fernando" onChange={event => setNumero_rua(event.target.value)} value={numero_rua} />
          <label>Bairro:</label>
          <input type="text" required placeholder="Bairro do fernando" onChange={event => setBairro(event.target.value)} value={bairro} />
          <label>Cidade:</label>
          <input type="text" required placeholder="Nova Andradina" onChange={event => setCidade(event.target.value)} value={cidade} />
          <label>Estado:</label>
          <input type="text" required placeholder="MS" onChange={event => setEstado(event.target.value)} value={estado} />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/administrador">Voltar</Link></button>
        </form>
      </div>
    </Container>
  );
}