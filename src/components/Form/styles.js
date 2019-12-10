import styled, { css } from "styled-components";

export const ContentForm = styled.form`
  padding: 0 1em 1em;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 0.5em 0;
  font-size: 1.2em;
  margin-bottom: 0.5em;
  font-family: "Segoe UI";
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 25px;
  margin-bottom: 1em;
  padding: 0 0.8em;
  height: 3em;
  display: block;
  width: 100%;
  outline: none;
  font-family: "Segoe UI";
  &[disabled] {
    opacity: 0.9;
  }
`;

export const Message = styled.div`
  color: red;
  font-size: 0.675em;
  font-family: "Segoe UI";
  ${props =>
    props.showMessage &&
    css`
       {
        margin-bottom: 1em;
      }
    `}
`;
