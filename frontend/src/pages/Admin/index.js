import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import cadcot from "../../assets/cadcot.svg";
import cadcom from "../../assets/cadcom.svg";
import relat from "../../assets/relat.svg";
export default function Administrador({history}) {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Gerenciar Dados</h1>
      </header>
      <section>
        <Link className="acess" to="../comercio">
          <div className="a">
            <img src={cadcom} className="icon" />
            <h1>Cadastrar Comércio</h1>
          </div>
        </Link>
        <Link className="acess" to="../cotacao">
          <div className="a">
            <img src={cadcot} className="icon" />
            <h1>Cadastrar Cotação</h1>
          </div>
        </Link>
        <Link className="acess" to="../relatorio">
          <div className="a">
            <img src={relat} className="icon" />
            <h1>Exibir Relatório</h1>
          </div>
        </Link>
      </section>
    </Container>
  );
}