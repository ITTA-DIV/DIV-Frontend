"use client";
import styled from "styled-components";
import Header from "./Header";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const PageFrame = () => {
  return (
    <Frame>
      <BrowserRouter>
        <Header></Header>
        <PageSection>
          <Routes>
            <Route path="/" element=<MainPage></MainPage> />
            <Route path="/Search" element=<SearchPage></SearchPage> />
          </Routes>
        </PageSection>
      </BrowserRouter>
    </Frame>
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

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PageFrame;
