import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
  .jvectormap-zoomin, 
  .jvectormap-zoomout {
    display: none;
  }
`;

export default GlobalStyles;
