"use client"
import styled from "styled-components";

const Header = () => {
  return (
    <Frame>
      <Logo src="/images/LogoText.png"></Logo>
      <SearchField>
        <SearchLogo src = "/images/Magnifier_Emoji.png"></SearchLogo>
        <SearchPlaceHolder>지금 핫한 공모전 찾아보기!!</SearchPlaceHolder>
      </SearchField>
      <Tab>
        <TabText>홈페이지</TabText>
        <TabText>마이페이지</TabText>
        <TabText>등록하기</TabText>
      </Tab>
      <UserFrame>
        <ProfilePic src = "/images/Member.png"></ProfilePic>
        <UserName>이명준</UserName>
      </UserFrame>
    </Frame>
  );
};

const Frame = styled.div `
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: white;
  white-space: nowrap;
`;

const Logo = styled.img`
  position: relative;
  width: 95px;
  height: 31px;
  margin-left: 43px;
`;

const Tab = styled.div`
  position: relative;
  display: flex;
  margin-left: 66px;
  gap: 60px;
  flex-direction: row;
`;

const TabText = styled.text`
position: relative;
font-family: "PretendardBold";
font-size: 15;
`;

const SearchField = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 29px;
  min-width: 300px;
  width: 399px;
  height: 39px;
  border-radius: 50px;
  background-color: var(--color-darkturquoise);
`;

const SearchLogo = styled.img`
  position: relative;
  margin-left: 14px;
  width: 21px;
  height: 21px;
`;

const SearchPlaceHolder = styled.div`
  position: relative;
  margin-left: 11px;
  font-family: "PretendardBold";
  font-size: 15;
  color: white;
`;


const UserFrame = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
flex-direction: row;
gap:11px;
`;

const ProfilePic = styled.img`
position: relative;
width: 30px;
height: 30px;
margin-left: 630px;
border-radius: 30px;
`;

const UserName = styled.text`
position: relative;
font-family: "PretendardBold";
font-size: 15px;
`;

export default Header;
