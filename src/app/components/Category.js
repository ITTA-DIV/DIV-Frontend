"use client"
import styled from "styled-components";
import React,{span} from "react";

const Category = () => {
    
  return (
    <Frame>
      <Title><span>엄</span>선한 카테고리들</Title>
      <SubTitle>담앗콘이 엄선하여 분류한 카테고리들을 살펴보세요</SubTitle>
      <ContentRow>
        <Content>
            <Image src = "/images/Category1.jpg"></Image>
            <Name>IT</Name>
        </Content>
        <Content>
            <Image src = "/images/Category2.jpg"></Image>
            <Name>인문학</Name>
        </Content>
        <Content>
            <Image src = "/images/Category3.jpg"></Image>
            <Name>언론</Name>
        </Content>
        <Content>
            <Image src = "/images/Category4.jpg"></Image>
            <Name>과학</Name>
        </Content>
        <Content>
            <Image src = "/images/Category5.jpg"></Image>
            <Name>세미나</Name>
        </Content>
        <Content>
            <Image src = "/images/Category6.jpg"></Image>
            <Name>전시회</Name>
        </Content>
        <Content>
            <Image src = "/images/Category7.jpg"></Image>
            <Name>발표</Name>
        </Content>
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
  gap: 8px;
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
  font-size: 10px;
  color: black;
`;

const ContentRow = styled.div `
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const Content = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.img `
  position: relative;
  width: 235px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid var(--color-white);
`;

const Name = styled.text `
  position: relative;
  font-family: "PretendardSemiBold";
  font-size: 15px;
`;


export default Category;
