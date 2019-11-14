import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 14px Arial;
  }
  
  html, body, #root {
    height: 100%;
    overflow-y:hidden;
  }

  body {
    background: #FFA07A;
    font-family: 'Arial';
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.6em;
    font-weight: bold;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
