import styled from "styled-components";

export const Formulario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;

  input {
    width: 300px;
    padding: 15px 40px;
    border-radius: 4px;
    border: ${props =>
      props.witherro ? "4px solid red" : "2px solid darkblue"};
    outline: none;
  }

  button {
    padding: 16px 20px;
    border-radius: 4px;
    background: darkblue;
    color: white;
    border: none;
    margin-left: 10px;
  }
`;
