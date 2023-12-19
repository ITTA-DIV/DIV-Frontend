"use client"
import styled from "styled-components";
import EventBanner from "@/app/components/EventBanner";
import Category from "@/app/components/Category";
import SectionRow from "@/app/components/SectionRow";
import { events } from "@/app/API";
import Header from "../components/Header";
const MainPage = () => {
  return (
    <OuterFrame>
    <Header></Header>
    <PageSection>
    <Frame>
        <EventBanner></EventBanner>
        <Category></Category>
        <SectionRows>
        <SectionRow data = {events.results.dedlines} title = {"마감임박 행사들"} subtitle ={"마감이 얼마 안남았어요!"}></SectionRow>
        <SectionRow data = {events.results.new} title = {"신규 행사들"} subtitle ={"새로생긴 행사들을 모았어요!!"}></SectionRow>
        <SectionRow data = {events.results.now} title = {"주목해야할 행사들"} subtitle ={"중요한 행사들만 엄선했어요"}></SectionRow>
        </SectionRows>
   </Frame>
   </PageSection>
   </OuterFrame>
  );
};

const PageSection = styled.div`
  position: relative;
  display: flex;
  width: 97.75%;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  overflow: hidden;
`;

const OuterFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Frame = styled.div `
position: relative;
width: 100%;
height: 100%;
`;

const SectionRows = styled.div `
position: relative;
display: flex;
flex-direction: column;
margin-top: 42px;
  margin-left: 45px;
gap: 107px;
`;

export default MainPage;