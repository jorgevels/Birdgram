import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
`;
export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.3em;
  font-size: 0.8em;
  font-weight: bold;
  font-family: "Segoe UI";
  ${props =>
    props.color &&
    css`
       {
        color: ${props.color};
      }
    `}
`;
