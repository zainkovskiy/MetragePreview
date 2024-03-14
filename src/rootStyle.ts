import { createGlobalStyle } from 'styled-components';
import MontLight_EOT from './fonts/Mont-Light.eot';
import MontLight_TTF from './fonts/Mont-Light.ttf';
import MontLight_WOFF from './fonts/Mont-Light.woff';
import MontLight_WOFF2 from './fonts/Mont-Light.woff2';
import MontBold_EOT from './fonts/Mont-Bold.eot';
import MontBold_TTF from './fonts/Mont-Bold.ttf';
import MontBoldWOFF from './fonts/Mont-Bold.woff';
import MontBoldWOFF2 from './fonts/Mont-Bold.woff2';

export const GlobalStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
  }
  #root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  @font-face {
    font-family: 'MontLight';
    src: local('MontLight'), 
    url(${MontLight_EOT}),
    url(${MontLight_EOT}?#iefix) format("embedded-opentype"),
    url(${MontLight_WOFF}) format('woff'),
    url(${MontLight_WOFF2}) format('woff2'),
    url(${MontLight_TTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'MontBold';
    src: local('MontBold'), 
    url(${MontBold_EOT}),
    url(${MontBold_EOT}?#iefix) format("embedded-opentype"),
    url(${MontBoldWOFF}) format('woff'),
    url(${MontBoldWOFF2}) format('woff2'),
    url(${MontBold_TTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  table{
    font-family: 'MontLight';
    font-size: 12px;
    border-collapse: collapse;
    border: 1px solid #ccc;
    & th {
      font-family: 'MontBold';
      border: 1px solid #ccc;
      padding: 0.5rem;
      color: #85009e;
    }
    & td {
      padding: 0.5rem;
      border: 1px solid #ccc;
    }
  }
`;
