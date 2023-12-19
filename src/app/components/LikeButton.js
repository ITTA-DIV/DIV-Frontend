"use client";
import styled from "styled-components";
import {
  Motion,
  Spring,
  GlobalController,
  GuageController,
  Tween,
  Easetype,
} from "@/CorgiUI/src";
import React,{useState} from "react";

const heartImg = "images/heart.png";
const heartFillImg = "images/heartfill.png"; 

const LikeButton = () => {
  const handleClick = (event) => {
    setisLiked(!isLiked);
  };

  const [isLiked, setisLiked] = useState(false)

  return (
    <LikeButtonFrame onClick={(event) => handleClick(event)}>
      {isLiked ? (
        <LikeButtonOutline src= {heartFillImg}></LikeButtonOutline>
      ) : (
        <LikeButtonFill src= {heartImg}></LikeButtonFill>
      )}
    </LikeButtonFrame>
  );
};

const LikeButtonFrame = styled.button`
  position: relative;
  width: 25px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeButtonOutline = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LikeButtonFill = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default LikeButton;
