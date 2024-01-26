"use client";
import styled from "styled-components";
import React, { useRef, useState,useCallback,useEffect } from "react";
import ProjectPost from "./ProjectPost";
import { vwToPx } from "@/CorgiUI/src/Util/Converter";
import {
  Motion,
  Spring,
  GlobalController,
  GuageController,
  Tween,
  Easetype,
} from "@/CorgiUI/src";

const SectionRow = ({ data, title, subtitle }) => {

  const containerRef = useRef(null);
  const [sliderOn, setsliderOn] = useState(false);
  const [mousePosition, setmousePosition] = useState(0);

  const handleWheel = (e) => {
    const deltaX = mousePosition - e.clientX;
    containerRef.current.scrollLeft += 0.5*deltaX;
    setmousePosition(e.clientX);

    // 스크롤 이벤트 전파 방지
    e.preventDefault();
  };

  return (
    <Frame>
      <Title>
        <span>{title.charAt(0)}</span>
        {title.substring(1)}
      </Title>
      <SubTitle>{subtitle}</SubTitle>
      <Motion.div
        onMouseDown={(event, ref) => {
          setsliderOn(true);
          setmousePosition(event.clientX);
        }}
        onMouseUp={(event, ref) => {
          setsliderOn(false);
          setmousePosition(0);
        }}
        onMouseMove={(event, ref) => {
          if (sliderOn) {
            handleWheel(event);
          }
        }}
      >
        <ContentRow ref={containerRef}>
          {data.map((eventinfo, index) => {
        return (
              <ProjectPost
                key={index}
                title={eventinfo.title}
                category={eventinfo.category_name}
                date={eventinfo.eventDateTimeString}
                deadline={eventinfo.remainingDays}
                poster_path={eventinfo.thumbnail}
                eventId = {eventinfo.id}
              ></ProjectPost>
            );
          })}
        </ContentRow>
      </Motion.div>

    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  margin-left: 1px;
  font-family: "PretendardBold";
  font-size: 25px;
  color: black;

  span {
    color: var(--color-darkturquoise);
  }
`;

const SubTitle = styled.div`
  position: relative;
  margin-left: 3px;
  font-family: "PretendardSemiBold";
  font-size: 12px;
  color: black;
`;

const ContentRow = styled.div`
  position: relative;
  display: flex;
  padding-top: 20px;
  padding-bottom: 60px;
  margin-top: -10px;
  flex-direction: row;
  gap: 24px;
  overflow-x: scroll;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }
  
//
  /* scroll-behavior: smooth; */
`;

export default SectionRow;
