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
    margin-top:35px;
  }
   .lugar{
  display: inline-block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%; height: 250px;
  font-size: 14px; 
  text-decoration: none; 
  text-align: center;
  margin:10px;
  text-shadow: 2px 2px 4px #666; 
  color: #fff;
  background-color: rgba(80,80, 80, 0.8);
  border-radius:8px;
  
  }
`;