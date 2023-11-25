"use client"
import styled from "styled-components";

const ProjectPost = ({title,category,date,deadline,poster_path}) => {
  return (
    <Frame>
      <PosterImg alt="" src={poster_path} />
      <ForegroundFrame>
        <InfoFrame>
        <TextFrame>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <TextRow>
          <Date>{date}</Date>
          <Price>무료</Price>
          </TextRow>
        </TextFrame>
        <Line />
        <MemberIcon alt="" src="images/Member.png" />
        </InfoFrame>
      </ForegroundFrame>
      <DeadLineFrame>
        <DeadLineText>{"마감까지 D-"+deadline}</DeadLineText>
      </DeadLineFrame>
      <Outline />
    </Frame>
  );
};

const PosterImg = styled.img`
  position: absolute;
  height: 70.51%;
  width: 100%;
  object-fit: cover;
`;
const Line = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100%;
  height: 1px;
  background-color: white;
`;

const Category = styled.text`
  font-size: 9px;
  font-family: "PretendardMedium";
`;

const Title = styled.text`
  font-size: 15px;
  font-family: "PretendardBold";
`;

const Date = styled.div`
  font-size: 11px;
  font-family: "PretendardMedium";
`;

const Price = styled.div`
  font-size: 11px;
  font-family: "PretendardMedium";
`;

const TextRow = styled.div`
display: flex;
justify-content: space-between;
`;

const InfoFrame = styled.div`
  position: relative;
  margin-top: 26.89px;
  width: 201px;
  height: 96.2px;
`;

const MemberIcon = styled.img`
  position: relative;
  margin-top: 9px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: cover;
`;

const TextFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: white;
`;

const ForegroundFrame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 49.06%;
  width: 100%;
  bottom: 0;
  background: linear-gradient(
    179.43deg,
    rgba(59, 193, 198, 0),
    rgba(59, 193, 198, 0.9) 23.26%,
    #3bc1c6
  );
`;
const DeadLineText = styled.text`
  font-size: 15px;
  font-family: "PretendardMedium";
  color: white;
`;
const DeadLineFrame = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 107px;
  height: 25px;
  border-radius: 11px 0px 11px 0px;
  background-color: var(--color-darkturquoise);
`;
const Outline = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: var(--br-6xs);
  border: 4px solid var(--color-darkturquoise);
  box-sizing: border-box;
`;
const Frame = styled.div`
position: relative;
  border-radius: var(--br-6xs);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  width: 226px;
  height: 277px;
  overflow: hidden;
`;

export default ProjectPost;