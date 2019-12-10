import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn, gradientAnimate } from "../../styles/animation";

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const ContentImage = styled.div`
  overflow: hidden;
  height: 75px;
  width: 75px;
`;

export const Image = styled.img`
  overflow: hidden;
  object-fit: cover;
  ${"" /*  border: 1px solid #ddd; */}
  ${"" /*  border: 10px solid;
  border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1; */}
  border: double 1px transparent;
  border-radius: 50px;
  background-image: linear-gradient(magenta, magenta),
    linear-gradient(
      to right,
      red,
      red,
      orange,
      orange,
      orange,
      yellow,
      yellow,
      yellow,
      #a8ff33,
      #a8ff33,
      #a8ff33,
      #0038ff,
      #0038ff,
      #0038ff,
      #8700ff,
      #8700ff
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  height: 75px;
  width: 75px;
  border-radius: 50%;
  box-shadow: 0px 0px 6px #5f5656;
  ${fadeIn()}
`;
/* export const LoaderCategory = styled.div`
  overflow: hidden;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #e4e2e1, #d4cacc, #bbc1c1, #eaecef);
  background-size: 400% 400%;
  ${gradientAnimate("5s")}
`; */
