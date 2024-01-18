"use client"
import styled from "styled-components";
import Header from "../components/Header";
import LoginButton from "../components/LoginButton";
import React,{useState,useEffect} from "react";
import ic_clock from "images/ic_clock.png"
import ic_form from "images/ic_form.png"
import ic_coin from "images/ic_coin.png"
import ic_pin from "images/ic_pin.png"
import ic_blackdoublearrow from "images/ic_blackdoublearrow.png"
import ic_backbutton from "images/ic_backbutton.png"
import autherimg from "images/autherimg.png"
const DeatilPage = () => {

  const timedata = "11월 25일 (토) 02:00 ~ 11월 26일(일) 20:00"
  const deadlinedata = "11월 25일 (토) 02:00 ~ 11월 26일(일) 20:00"
  const pricedata = "무료"
  const placedata = "서울 중구 소파로 138 남산 드라마센터"
  const title = "뚝섬 재사용 장터"
  const categorydata = "IT 분야"
  const profilename = "한국 투자 증권 위원회"
  const wrotedate = "Jun 19, 2019"
  const [content, setcontent] = useState("")
  const eventsubtitle = "밀라노에서 온 재홍, 런던으로 간 수지,경주에서 온 소영. 이방인 3인이 이야기하는 낯선 경험들."
  
  useEffect(() => {
    fetch('./content.txt')
  .then((r) => r.text())
  .then(text  => {
    setcontent(text);
  })
  }, [])

  return (
    <OuterFrame>
    <Header></Header>
    <PageSection>
    <Frame>
    <BackgroundImg></BackgroundImg>
    <PosterSection>
      <PosterInfoSection>
        <Title>{title}</Title>
        <CategoryFrameList>
          <CategoryFrame>
            <CategoryHeader>
              <CategoryHeaderEmoji src = {ic_clock}></CategoryHeaderEmoji>
              <CategoryHeaderText>일시</CategoryHeaderText>
            </CategoryHeader>
            <CategoryDetail>{timedata}</CategoryDetail>
          </CategoryFrame>
          <CategoryFrame>
            <CategoryHeader>
              <CategoryHeaderEmoji src = {ic_form}></CategoryHeaderEmoji>
              <CategoryHeaderText>신청</CategoryHeaderText>
            </CategoryHeader>
            <CategoryDetail>{deadlinedata}</CategoryDetail>
          </CategoryFrame>
          <CategoryFrame>
            <CategoryHeader>
              <CategoryHeaderEmoji src = {ic_coin}></CategoryHeaderEmoji>
              <CategoryHeaderText>비용</CategoryHeaderText>
            </CategoryHeader>
            <CategoryDetail>{pricedata}</CategoryDetail>
          </CategoryFrame>
          <CategoryFrame>
            <CategoryHeader>
              <CategoryHeaderEmoji src = {ic_pin}></CategoryHeaderEmoji>
              <CategoryHeaderText>장소</CategoryHeaderText>
            </CategoryHeader>
            <CategoryDetail>{placedata}</CategoryDetail>
          </CategoryFrame>
        </CategoryFrameList>
        <ApplyButton>
          <ApplyButtonText>신청하기</ApplyButtonText>
          <ApplyButtonArrow src = {ic_blackdoublearrow}></ApplyButtonArrow>
        </ApplyButton>
      </PosterInfoSection>
    </PosterSection>
    <TextPanel>
      <TextPanelFrame>
      <TextPanelHeader>
        <Category>{categorydata}</Category>
        <BackButton src = {ic_backbutton}></BackButton>
      </TextPanelHeader>
      <TextPanelTitle>{eventsubtitle}</TextPanelTitle>
      <AutherProfileFrame>
        <AutherProfilePic src = {autherimg}></AutherProfilePic>
        <AutherProfileTextFrame>
          <AutherProfileName>{profilename}</AutherProfileName>
          <AutherProfileDate>{wrotedate}</AutherProfileDate>
        </AutherProfileTextFrame>
      </AutherProfileFrame>
      <Content>{content}</Content>
      </TextPanelFrame>
    </TextPanel>
    </Frame>
    </PageSection>
    </OuterFrame>
  );
};

const OuterFrame = styled.div`
position: absolute;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const PageSection = styled.div`
position: absolute;
display: flex;
top : 68px;
bottom : 0px;
width: 97.75%;
border-radius: 30px 30px 0px 0px;
background-color: white;
overflow: hidden;
`;

const Frame = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`;

const BackgroundImg = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: black;
`;

const PosterSection = styled.div`
position: relative;
width: 50%;
height: 899px;
`;


const PosterInfoSection = styled.div`
position: relative;
margin-top: 526px;
left: 46px;
display: flex;
flex-direction: column;
`;

const Title = styled.text`
position: relative;
font-family: "PretendardBold";
font-size: 67;
letter-spacing: 3px;
color: white;
`;

const CategoryFrameList = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 12px;
margin-top: 10px;
`;

const CategoryFrame = styled.div`
position: relative;
display: flex;
flex-direction: row;
gap: 23px;
`;

const CategoryHeader = styled.div`
position: relative;
width: 72px;
height: 27px;
display: flex;
flex-direction: row;
align-items: center;
`;

const CategoryHeaderEmoji = styled.img`
position: relative;
width: 16px;
height: 16px;
margin-left: 5px;
`;

const CategoryHeaderText = styled.text`
position: relative;
font-family: "PretendardSemiBold";
font-size: 14px;
color: white;
margin-left: 9px;
letter-spacing: 3px;
`;

const CategoryDetail = styled.text`
position: relative;
font-family: "PretendardSemiBold";
font-size: 14px;
color: white;
letter-spacing: 3px;
`;

const ApplyButton = styled.div`
position: relative;
width: 192px;
height: 65px;
display: flex;
flex-direction: row;
margin-top: 24px;
align-items: center;
background-color: white;
border-radius: 20px;
`;

const ApplyButtonText = styled.text`
position: relative;
font-family: "PretendardSemiBold";
color: black;
margin-left: 39px;
`;

const ApplyButtonArrow = styled.img`
position: relative;
width: 10.5px;
height: 7.5px;
margin-left: 40px;
`;

const TextPanel = styled.div`
position: relative;
width: 50%;
height: 879px;
border-radius: 22px;
background-color: white;
`;

const TextPanelFrame = styled.div`
position: relative;
margin-left: 34px;
display: flex;
flex-direction: column;
`;

const TextPanelHeader = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
margin-top: 31px;
width: 662px;
height: 39px;
`;


const Category = styled.div`
position: absolute;
left: 0;
border-radius: 7px;
background-color: #3BC1C6;
padding-left: 16.5px;
padding-right: 16.5px;
padding-top: 10px;
padding-bottom: 10px;
font-family: "PretendardSemiBold";
font-size: 20px;
color: white;
`;

const BackButton = styled.img`
position: absolute;
right: 0;
width: 24.25px;
height: 22.5px;
`;

const TextPanelTitle = styled.p`
position: relative;
margin-top: 19px;
font-family: "PretendardSemiBold";
color: black;
font-size: 35px;
`;

const AutherProfileFrame = styled.div`
position: relative;
margin-top: 31px;
display: flex;
flex-direction: row;
align-items: center;
width: 239px;
height: 54px;
`;

const AutherProfilePic = styled.img`
position: relative;
width: 54px;
height: 54px;
border-radius: 54px;
`;

const AutherProfileTextFrame = styled.div`
position: relative;
flex-direction: column;
margin-left: 17px;
gap:4px
`;

const AutherProfileName = styled.p`
position: relative;
font-family: "PretendardSemiBold";
color: black;
font-size: 19;
`;

const AutherProfileDate = styled.p`
position: relative;
font-family: "PretendardRegular";
color: #818F98;
font-size: 17;
`;

const Content = styled.p`
position: relative;
margin-top: 27px;
font-family: "PretendardRegular";
font-size: 20px;
color: black;
`;


export default DeatilPage;
