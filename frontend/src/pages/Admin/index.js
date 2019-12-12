import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import cadcot from "../../assets/cadcot.svg";
import relat from "../../assets/relat.svg";
export default function Administrador() {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Gerenciar Dados</h1>
      </header>
      <section>
        <Link className="lugar" to="../Cotacao">
          <div className="a">
            <img src={cadcot} className="icon" />
            <h1>Cadastrar Serviço</h1>
          </div>
        </Link>
        <Link className="lugar" to="../Relatorio">
          <div className="a">
            <img src={relat} className="icon" />
            <h1>Exibir Relatórios</h1>
          </div>
        </Link>
      </section>
    </Container>
  );
}