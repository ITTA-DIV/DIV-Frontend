"use client";
import styled from "styled-components";
import EventBanner from "@/app/components/EventBanner";
import Category from "@/app/components/Category";
import SectionRow from "@/app/components/SectionRow";
import { events } from "@/app/API";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [dataOrigin, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const accessToken = useSelector((state) => state.accessToken);
  console.log(accessToken)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.damoacon.shop/api/v1/event");
      const result = res.json();
      return result;
    };

    fetchData().then((res) => setData(res.data));

    const getGoogleProfile = async () => {
      const res = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );
      const result = res.json();
      return result;
    };

    getGoogleProfile().then((res) => setProfile(res.data)).then((res)=>console.log(res.data));
  }, []);

  return (
    <OuterFrame>
      <Header></Header>
      <PageSection>
        <Frame>
          <EventBanner></EventBanner>
          <Category></Category>
          <SectionRows>
            {dataOrigin.map((outputData, index) => {
              return (
                <SectionRow
                  key={index}
                  data={outputData}
                  title={"마감임박 행사들"}
                  subtitle={"마감이 얼마 안남았어요!"}
                ></SectionRow>
              );
            })}
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

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SectionRows = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  margin-left: 45px;
  gap: 107px;
`;

export default MainPage;
