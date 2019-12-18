import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";
export default function Relatorio({history}) {
  const [count, setCount] = useState([]);
 
 
  const deletar=async (id) => {
    setCount((await api.delete("quote/"+id)).data)
  }

  useEffect(() => {
    async function load() {
      const response = await api.get("quote");
      setCount(response.data);
    }
    load();
  }, []);
  
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Exibindo dados</h1>
      </header>
      <div className="tudo">
       
        <table width="100%" border="1px">
            <thead>
              <tr>
                <th width="20%" height="20%">Cesta</th>
                <th width="20%">Preço</th>
                <th width="20%">Feito por</th>
                <th width="20%">Mês referente</th>
                <th width="40%">Referente a comércio</th>
                <th width="25%">Ação</th>
              </tr>
            </thead>
            <tbody>
            {count.map(i =>(
                <tr>
                  <td height="20%">{i.cesta}</td>
                  <td>{i.preco}</td>
                  <td>{i.user.nome}</td>
                  <td>{i.mes}</td>
                  <td>{i.comercio.nome}</td>
                  <td><button className="novo" onClick={e => deletar(i._id)}><i/>Deletar</button></td>
                </tr>))}
            </tbody>
          </table>
          <div className="batata">
          <button className="sair"><Link className="link" to="/administrador">Voltar</Link></button>
          </div>
      </div>
    </Container>
  );
}