import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

*{
  box-sizing: border-box;
}
  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    font-family: 'Lato';
  }
`;
