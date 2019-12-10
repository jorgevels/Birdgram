import styled from "styled-components";

export const Button = styled.button`
  background: #8d00ff;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: "Segoe UI";
  height: 50px;
  width: 100%;
  letter-spacing: 1px;
  margin: 10px 0px;
  &[disabled] {
    opacity: 0.3;
  }
`;
