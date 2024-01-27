"use client";
import styled from "styled-components";
import React, { useState } from "react";
import { addDisplayFilter, addFilter, removeDisplayFilter, removeFilter } from "../actions/Actions";
import { useSelector,useDispatch } from "react-redux";
const SelectionFilter = ({ title,types,values }) => {

  const dispatch = useDispatch();
  const currentDisplayFilters = useSelector((state) => state.currentDisplayFilters);
  const selectionActiveImg = "images/ic_Selection_Active.png"
  const selectionUnactiveImg = "images/ic_Selection_Unactive.png"

  const [selected, setselected] = useState(
    currentDisplayFilters.includes(title) ? true : false
  );

  const handleClick = () => {
    types.map((type,index)=>{
      dispatch(selected ? removeFilter(type) : addFilter(type,values[index]))
    })
    dispatch(selected ? removeDisplayFilter(title,types) : addDisplayFilter(title,types))
    setselected(!selected);
  };

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
