import React from "react";

import { ModalContainer } from "./estilo";

const Modal = ({ erroInput }) => (
  <ModalContainer modalErro={erroInput}>
    <h3>Digite um nome/numero correto</h3>
  </ModalContainer>
);

export default Modal;
