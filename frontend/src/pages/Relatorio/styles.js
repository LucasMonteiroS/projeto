import styled from "styled-components";
import imgFundo from "../../assets/fundo.jpg";
export const Container = styled.div`
  height: 100%;
  background:  url(${imgFundo}) no-repeat right;
  background-size: cover;

  .cabeçalho {
    height: 75px;
    background: #FF7F50;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
    background: rgba(0, 0, 0, 0.2);
  }
  button{
    background:rgba(255, 255, 255, 0.8);
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
    border-radius: 15px;
  }
  .link {
    color: black;
    font-size: 1em;
    font-weight: bold;
  }
  .tudo{
    align-content:center;
    align-items:center;
    display:inline-block;
    overflow-x:auto;
  }
  .batata{
    height: 20%;
    background: rgba(0, 0, 0, 0);
    
  }
  .sair{
    width: 30%;
  }
  .novo{
    height: 100%;
    width:100%;
    background: red;
    border-radius: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    color:white;
  }
  table{
    border:none;
    border-collapse: collapse;
    
  }
  td{
    padding:10px;
    text-align:center;
  }
  th{
    background-color: tomato;
    font-size:15pt;
    color:white;
    padding:15px;
    
  }
  tr:nth-child(odd) {
    background-color: #ffffff;
  }
  tr:nth-child(even) {
    background-color: #f1f1fa;
  }
`;