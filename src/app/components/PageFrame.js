"use client"
import styled from "styled-components";
import Header from "./Header";
import MainPage from "./MainPage";
const PageFrame = () => {
  return (
    <Frame>
   <Header></Header>
   <PageSection>
    <MainPage></MainPage>
   </PageSection>
   </Frame>
  );
};

const PageSection = styled.div `
  position: relative;
  display: flex;
  width: 97.75%;
  border-radius: 30px 30px 0px 0px;
  background-color: white;
  overflow: hidden;
`;

const Frame = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export default PageFrame;
