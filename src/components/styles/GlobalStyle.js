import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  p {
    margin: 0 0 1rem 0;
  }
`;

export default GlobalStyles;
