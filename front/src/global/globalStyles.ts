import { createGlobalStyle } from 'styled-components';

export const globalColors = {
  darkBlue: '#154962',
  lightBlue: '#99DFEB',
  white: '#F2F3F3',
  mostarda: '#EDA61A',
  darkOrange: '#E97B0C',
  turquesa: '#3E99B4',
};

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  `;
