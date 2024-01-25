"use client";
import styled from "styled-components";
import React from "react";
import { removeFilter } from "../actions/Actions";
import { useDispatch } from "react-redux";
const Filter = ({ title,types,values }) => {

  const deleteButtonImg = "/images/ic_CloseButton.png" 

  const dispatch = useDispatch();

  const handleClick = () => {
    types.map((type,index)=>{
      dispatch(removeFilter(type))
    })
  };

  return (
    <FilterFrame onClick={handleClick}>
      <FilterContentFrame>
        <FilterText>{title}</FilterText>
        <FilterCloseButton src = {deleteButtonImg}></FilterCloseButton>
      </FilterContentFrame>
    </FilterFrame>
  );
};

const FilterFrame = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 38px;
padding-left: 23px;
padding-right: 12px;
background-color: #3bc1c6;
border-radius: 8px;
`;

const FilterContentFrame = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;
`;

const FilterText = styled.div`
position: relative;
font-family: "PretendardSemiBold";
color: white;
font-size: 20px;
`;

const FilterCloseButton = styled.img`
position: relative;
width: 15px;
height: 15px;
background: center/cover no-repeat;
`;

export default Filter;
