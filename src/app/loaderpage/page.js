"use client"
import styled from "styled-components";
import React, { useEffect, useState,forwardRef } from "react";
const LoaderPage =  forwardRef((props,ref) => {

  const logoImg = "images/LogoText.png"

  return (
    <Frame>
      <PlaceHolder src = {logoImg}></PlaceHolder>
    </Frame>
  );
});

const Frame = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height:100%;
`;

const PlaceHolder = styled.img`
position: relative;
height : 164px;
object-fit: fill;
`;


LoaderPage.displayName = "LoginPage"; // displayName 설정

export default LoaderPage;



