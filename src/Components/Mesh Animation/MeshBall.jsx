import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function MeshBall() {
  const { width, height } = useWindowSize();

  const MoveMeshBall = keyframes`
      0%{
            transform: translate(0, 0);
      }
      50%{
            transform: translate(${width / 1.2}px, ${
    height / 2
  }px) rotate(360deg)
      }
      100%{
            transform: translate(0, 0);
      }
   `;

  const MeshBallStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #fad96b 0%, #ad86f3 100%);
    filter: blur(40px);
    animation: ${MoveMeshBall} 15s alternate linear infinite;
  `;

  return <MeshBallStyled></MeshBallStyled>;
}

export default MeshBall;
