"use client";
import styled from "styled-components";
import React, { useState } from "react";
import { addFilter, removeFilter } from "../actions/Actions";
import { useSelector,useDispatch } from "react-redux";
const SelectionFilter = ({ title,types,values }) => {

  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.currentFilters);

  const [selected, setselected] = useState(
    currentFilters.includes(title) ? true : false
  );

  const handleClick = () => {
    types.map((type,index)=>{
      dispatch(selected ? removeFilter(type) : addFilter(title,type,values[index]))
    })
    setselected(!selected);
  };

  const selectionActiveImg = "images/ic_Selection_Active.png"
  const selectionUnactiveImg = "images/ic_Selection_Unactive.png"

  return (
    <FilterFrame onClick={handleClick}>
      <FilterContentFrame>
        <FilterText>{title}</FilterText>
        <FilterSelection src = {selected ? selectionActiveImg : selectionUnactiveImg}></FilterSelection>
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

const FilterSelection = styled.img`
position: relative;
width: 15px;
height: 15px;
background: center/cover no-repeat;
object-fit: cover;
`;

export default SelectionFilter;
