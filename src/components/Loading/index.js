import React from "react";
import { rotate, SquareLoading, SquareInside } from "./styles";
import styled, { keyframes } from "styled-components";

/* export const Loading = () => {
  return (
    <SquareLoading>
      <SquareInside />
      <SquareInside />
      <SquareInside />
    </SquareLoading>
  );
}; */

export const Loading = styled.div`
  ${rotate()}
  border:3px solid green;
  border-right: 2px solid transparent;
  border-radius: 50%;
  height: 40px;
  margin-bottom: 10px;
  margin-left: calc(50% - 40px);
  width: 40px;
  z-index: 10;
`;
