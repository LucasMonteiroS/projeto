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
  button{
    background-color:black;
    margin-left:95%;
    margin-top:850px;
    font-weight: bold;
    border-radius: 15px;
     width: 70px;
     height:25px;
     border: 0;
    font-size: 1.2em;
    outline: 0;
  }
`;