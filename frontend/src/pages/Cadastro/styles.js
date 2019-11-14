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

  form {
    width: 100%;
    max-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  label {
    font-size: 1.2em;
    font-weight: bold;
    padding-top: 10px;
  }

  label, input, button {
    width: 100%;
  }

  input, button{
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
  }

  input {
    background: rgba(255, 255, 255, 0.5);
    color: black;
    padding: 0 15px;
    font-weight: bold;
    border-radius: 10px;
  }

  button {
    background:rgba(255, 255, 255, 0.8);
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
`;