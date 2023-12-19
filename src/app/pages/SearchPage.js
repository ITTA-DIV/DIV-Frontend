"use client";
import styled from "styled-components";
import ProjectPost from "../components/ProjectPost";
import FilterModal from "../components/FilterModal";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { events } from "../API";
import Filter from "../components/Filter";
const SearchPage = () => {
  const tempdata = events.results.dedlines;
  const resultNum = 122;
  const currentFilters = useSelector((state) => state.currentFilters);

  const [isModal, setisModal] = useState(false);
  return (
    <Frame>
      <Banner>
        <BannerImage></BannerImage>
        <BannerText>{resultNum}개의 공모전이 발견되었어요!</BannerText>
      </Banner>
      <ResultGrid>
        {tempdata.map((eventinfo, index) => {
          return (
            <ProjectPost
              key={index}
              title={eventinfo.title}
              category={eventinfo.category}
              date={eventinfo.date}
              deadline={eventinfo.deadline}
              poster_path={eventinfo.poster_path}
            ></ProjectPost>
          );
        })}
      </ResultGrid>
      <SearchBarOuterFrame>
        <SearchBarBackgroundSquare></SearchBarBackgroundSquare>
        <SearchBarFrame>
          <FiltersFrame>
            {currentFilters.map((filterName, index) => {
              return <Filter key={index} title={filterName}></Filter>;
            })}
          </FiltersFrame>
          <FilterSettingButton onClick={() => setisModal(true)}>
            <FilterSettingButtonText>필터 선택</FilterSettingButtonText>
          </FilterSettingButton>
        </SearchBarFrame>
      </SearchBarOuterFrame>
      {isModal && <FilterModal setisModal={setisModal}></FilterModal>}
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  position: relative;
  width: 1562px;
  height: 254px;
  border-radius: 30px;
  overflow: hidden;
`;

const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: url(/images/SearchBanner.png) center/cover no-repeat;
`;

const BannerText = styled.div`
  position: relative;
  margin-top: 74px;
  font-family: "PretendardBold";
  color: white;
  text-align: center;
  font-size: 55px;
`;

const ResultGrid = styled.div`
  position: relative;
  display: flex;
  width: 1476px;
  margin-top: 79px;
  padding-top: 20px;
  padding-bottom: 60px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

const SearchBarOuterFrame = styled.div`
  position: absolute;
  margin-top: 200px;
  width: 954px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarFrame = styled.div`
  position: relative;
  width: 912px;
  height: 102px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(59, 193, 198, 0.25); /* 그림자 설정, blur 정도는 10px */
`;

const SearchBarBackgroundSquare = styled.div`
  position: absolute;
  width: 74px;
  height: 74px;
  right: 0;
  background-color: black;
  opacity: 0.1;
  border-radius: 19px;
`;

const FiltersFrame = styled.div`
  position: relative;
  display: flex;
  width: 682px;
  margin-left: 45px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 11px;
`;

const FilterSettingButton = styled.div`
  position: absolute;
  display: flex;
  width: 167px;
  height: 68px;
  right: 15px;
  justify-content: center;
  align-items: center;
  background-color: #3bc1c6;
  border-radius: 15px;
`;

const FilterSettingButtonText = styled.div`
  position: relative;
  font-family: "PretendardBold";
  color: white;
  font-size: 20px;
`;

export default SearchPage;
