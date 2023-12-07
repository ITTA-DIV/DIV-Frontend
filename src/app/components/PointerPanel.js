"use client"
import React,{useState,useEffect} from "react";
import styled from "styled-components";
const PointerPanel = () => {
  const Frame = styled.div `
  position: relative;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: bisque;
  `;

  
  return (
    <Frame></Frame>
  );

};

export default PointerPanel;
