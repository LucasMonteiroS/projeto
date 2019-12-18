import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";
export default function Cotacao({ history }) {
  const [mes, setMes] = useState("Janeiro");
  const [cesta, setCesta] = useState("Arroz, Feijão, Batata");
  const [preco, setPreco] = useState("");
  const [comercio, setComercio] = useState([]);
  const [comercio2, setComercio2] = useState([]);
  useEffect(() => {
    const populateComercios = async () => {
      const requisicao = await api.get(`/commerce`);
      setComercio2(requisicao.data);
    };
    populateComercios();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/quote", {
        user: (JSON.parse(await localStorage.getItem('@CESTA/user')))._id,
        comercio,
        mes,
        cesta,
        preco
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
      <div>
        <form onSubmit={handleSubmit}>
          <label>Comércio:</label>
          <select
                id="comercio"
                name="comercio"
                onChange={event => setComercio(event.target.value)}
              >
                {
                  comercio2.map(({ _id, nome }) => (
                    <option value={_id}>
                      {nome}
                    </option>
                  ))}
              </select>
          <label>Mês:</label>
          <select id="mes" onChange={(e) => setMes(e.target.value)}>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
              </select>
          <label>Cesta:</label>
          <select id="cesta" onChange={event => setCesta(event.target.value)}>
                <option value="Arroz, Feijão, Batata">Arroz, Feijão, Batata</option>
                <option value="Arroz, Feijão, Batata, Carne">Arroz, Feijão, Batata, Carne</option>
          </select>
          <label>Preço:</label>
          <input type="number" required placeholder="400.00" onChange={event => setPreco(event.target.value)} value={preco} />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/administrador">Voltar</Link></button>
        </form>
      </div>
    </Container>
  );
}