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
  .icon{
    height:100px;
    width:100px;
    margin-top:45%;
  }
  .acess{
  display: inline-block;
  justify-content: center;
  align-content:center;
  align-items:center;
  text-align:center;
  flex-direction: column;
  width: 30%;
  height: 80%;
  font-size: 14px; 
  text-decoration: none; 
  text-align: center;
  margin:10px;
  text-shadow: 2px 2px 4px #666; 
  color: #fff;
  background-color: rgb(80,80, 80, 57%);
  border-radius:8px;
  }
  section{
    width:100%;
    height:100%;
    margin-top:2%;
    align-content:center;
    align-items:center;
    text-align:center;
  }
  .a{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    .acess{
  width: 80%;
  height: 20%;
    }
    .icon{
    height:100px;
    width:100px;
    margin-top:5%;
  }
  
  }

`;