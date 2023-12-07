import React, { useRef, useEffect } from "react";
import { Motion, Spring } from "@/CorgiUI/src";
import styled from "styled-components";
export default function FollowPointer({ children, DMS }) {

  const Frame = styled.div `
  position: relative;
  left: 830px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: bisque;
  `;

const StyledDiv = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
pointer-events: none;
`;

  return (
    <StyledDiv>
      <Motion.div
        onGlobalMouseMove={(event, ref) => {
          Spring.movingMotion(
            event.detail.value.x + "px",
            event.detail.value.y + "px",
            0,
            DMS,
            ref,
            "change"
          );
        }}
      >
        <Frame></Frame>
      </Motion.div>
    </StyledDiv>
  );
}
