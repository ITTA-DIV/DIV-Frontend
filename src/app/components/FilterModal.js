"use client";
import styled from "styled-components";
import {
  Motion,
  Spring,
  GlobalController,
  GuageController,
  Tween,
  Easetype,
} from "@/CorgiUI/src";

import SelectionFilter from "./SelectionFilter";

const closeButtonImg = "images/ic_CloseButton_Black.png"

const periodFilterList = ["모든 날", "오늘", "이번 주", "이번 달", "기간 선택"];

const stateFilterList = [
  "수도권",
  "부산/울산/경남",
  "대구/경북",
  "충청/대전/세종",
  "전라/광주",
  "강원",
];

const categoryFilterList = [
  "창업",
  "IT",
  "라이프",
  "경제/금융",
  "경영",
  "인문/사회",
  "예술",
  "마케팅",
  "커리어",
  "과학",
  "디자인/영상",
  "의료/의학",
  "행사 기획",
  "관광/여행",
];

const formetFilterList = ["강연/세미나", "공모전", "컨퍼런스"];

const attendenceFilterList = ["온라인", "오프라인"];

const priceFilterList = ["무료", "유료", "직접 입력"];

const filterTitleList = [
    { title: "일시", data: periodFilterList },
    { title: "지역", data: stateFilterList },
    { title: "행사분야", data: categoryFilterList },
    { title: "행사유형", data: formetFilterList },
    { title: "참여방법", data: attendenceFilterList },
    { title: "가격", data: priceFilterList },
  ];

const FilterModal = ({setisModal}) => {
  return (
    <Frame>
      <CloseButton onClick={() => setisModal(false)} src = {closeButtonImg}></CloseButton>
      <BannerFrame>
        <BannerText>필터 설정</BannerText>
      </BannerFrame>
      <TagSetFrame>
        {filterTitleList.map((filterSet, index) => {
          return (
            <TagLineFrame key = {index}>
              <TagLineTitle></TagLineTitle>
              <Title>
                <span>{filterSet.title.charAt(0)}</span>
                {filterSet.title.substring(1)}
              </Title>
              <FiltersFrame>
                {filterSet.data.map((filterName, index) => {
                    return (
                  <SelectionFilter key = {index} title = {filterName}></SelectionFilter>
        )})}
              </FiltersFrame>
            </TagLineFrame>
          );
        })}
      </TagSetFrame>
    </Frame>
  );
};

const Frame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1216px;
  height: 781px;
  background-color: white;
  border-radius: 30px;
  padding-top: 36px;
  padding-bottom: 36px;
`;

const CloseButton = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 36px;
  right: 36px;
  background: center/cover no-repeat;
`;

const BannerFrame = styled.div`
  position: relative;
  width: 991px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-darkturquoise);
`;

const BannerText = styled.p`
  position: relative;
  font-family: "PretendardBold";
  font-size: 20px;
  color: white;
`;

const TagSetFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 21px;
`;

const TagLineFrame = styled.div`
  position: relative;
  width: 991px;
`;

const TagLineTitle = styled.div`
  position: relative;
  width: 991px;
`;

const FiltersFrame = styled.div`
  position: relative;
  display: flex;
  width: 991px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 16px;
`;

const Title = styled.p`
  position: relative;
  margin-left: 1px;
  font-family: "PretendardBold";
  font-size: 25px;
  color: black;

  span {
    color: var(--color-darkturquoise);
  }
`;

export default FilterModal;
