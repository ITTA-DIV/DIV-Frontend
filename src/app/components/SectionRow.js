"use client"
import styled from "styled-components";
import ProjectPost from "./ProjectPost";
const SectionRow = ({data,title,subtitle}) => {
    
  return (
    <Frame>
      <Title><span>{title.charAt(0)}</span>{title.substring(1)}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <ContentRow>
        {data.map((eventinfo,index)=>{
          return  <ProjectPost key={index} title={eventinfo.title} category={eventinfo.category} date = {eventinfo.date} deadline = {eventinfo.deadline} poster_path={eventinfo.poster_path}></ProjectPost>
        })}
      
      </ContentRow>
    </Frame>
  );
};

const Frame = styled.div `
  position: relative;
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
  gap: 24px;
`;


export default SectionRow;
