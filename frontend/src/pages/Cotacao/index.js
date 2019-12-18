import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";
export default function Cotacao({ history }) {
  const [mes, setMes] = useState("");
  const [nome_rua, setNome_rua] = useState("");
  const [numero_rua, setNumero_rua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/quote", {
        mes,
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
      alert("Erro ao cadastrar cotação")
    }
  }
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Cadastrar uma nova Cesta</h1>
      </header>
    </Container>
  );
}