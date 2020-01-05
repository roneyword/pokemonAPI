import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${props => (props.modalErro ? "black" : "none")};
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 4px;
  background: white;
  padding: 0px 10px;
  animation: anima-modal 0.3s ease-in-out both;

  @keyframes anima-modal {
    from {
      opacity: 0;
      transform: translate(0px, -20px);
    }
    to {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;
