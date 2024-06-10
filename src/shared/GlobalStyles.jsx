import { createGlobalStyle } from "styled-components";
import paperImg from "../assets/paper.jpeg";

const GlobalStyles = createGlobalStyle`

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background-image: url(${paperImg}); 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    font-size: 1rem;   
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
