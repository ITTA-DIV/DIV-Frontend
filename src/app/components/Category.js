"use client"
import styled from "styled-components";
import React,{span} from "react";
import {
	Motion,
	Spring,
	GlobalController,
	GuageController,
	Tween,
	Easetype,
} from "@/CorgiUI/src";

const Category = () => {
    
  const categoryList = ["IT","인문학","언론","과학","세미나","전시회","발표"];
  return (
    <Frame>
      <Title><span>엄</span>선한 카테고리들</Title>
      <SubTitle>담앗콘이 엄선하여 분류한 카테고리들을 살펴보세요</SubTitle>
      <ContentRow>
        {categoryList.map((category,index)=>
        {return(
          <Motion.div
          onMouseOver={(event,ref) => Spring.scaleMotion(1.05,1.05,0,[15, 0.27, 55],ref,"change")}
          onMouseLeave = {(event,ref) => Spring.scaleMotion(1,1,0,[15, 0.27, 55],ref,"change")}
          >
         <Content key = {index}>
           <Image src = {"/images/Category"+(index+1)+".jpg"}></Image>
            <Name>{category}</Name>
        </Content>
        </Motion.div>
        )
        }
        )
        }
      </ContentRow>
    </Frame>
  );
};

const Frame = styled.div `
  position: relative;
  margin-top: 390px;
  margin-left: 45px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.text `
  position: relative;
  margin-left: 1px;
  font-family: "PretendardBold";
  font-size: 25px;
  color: black;

  span {
    color: var(--color-darkturquoise);
  }
`;

const SubTitle = styled.text `
  position: relative;
  margin-left: 3px;
  font-family: "PretendardSemiBold";
  font-size: 12px;
  color: black;
`;

const ContentRow = styled.div `
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  gap: 14px;
`;

const Content = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: center/cover no-repeat;
`;

const Image = styled.img `
  position: relative;
  width: 235px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid var(--color-white);
  object-fit: cover;
`;

const Name = styled.text `
  position: relative;
  font-family: "PretendardSemiBold";
  font-size: 15px;
`;


export default Category;
