import React, { Fragment } from "react";

import Header from "./components/header/index";
import Form from "./components/form/index";

import { GlobalStyle } from "./style";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Form />
  </Fragment>
);
export default App;
