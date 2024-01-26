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

import LikeButton from "./LikeButton";
import { useRouter } from "next/navigation";

const memberImage = "images/Member.png";

const ProjectPost = ({
  title,
  category,
  date,
  deadline,
  poster_path,
  eventId,
}) => {
  const router = useRouter();

  if(!(poster_path.includes("https://")))
  {
    poster_path =  "images/now1.jpg" ;
  } 

  console.log(poster_path);

  return (
    <Motion.div
      onMouseOver={(event, ref) =>
        Spring.scaleMotion(1.05, 1.05, 0, [15, 0.27, 55], ref, "change")
      }
      onMouseLeave={(event, ref) =>
        Spring.scaleMotion(1, 1, 0, [15, 0.27, 55], ref, "change")
      }
      onClick={() => {
        router.push(`/detailpage/?eventId=${eventId}`);
      }}
    >
      <Frame>
        <Inner>
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
              <BottomFrame>
                <MemberIcon alt="" src={memberImage} />
                <LikeButton eventId={eventId}></LikeButton>
              </BottomFrame>
            </InfoFrame>
          </ForegroundFrame>
          <DeadLineFrame>
            <DeadLineText>{"마감까지 D-" + deadline}</DeadLineText>
          </DeadLineFrame>
          <Outline />
        </Inner>
      </Frame>
    </Motion.div>
  );
};

const PosterImg = styled.img`
  position: absolute;
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const Line = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100%;
  height: 1px;
  background-color: white;
`;

const Category = styled.p`
  font-size: 9px;
  font-family: "PretendardMedium";
`;

const Title = styled.p`
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
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: cover;
`;

const BottomFrame = styled.div`
  position: relative;
  margin-top: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
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
  height: 135.89px;
  width: 100%;
  bottom: 0;
  background: linear-gradient(
    179.43deg,
    rgba(59, 193, 198, 0),
    rgba(59, 193, 198, 0.9) 23.26%,
    #3bc1c6
  );
`;
const DeadLineText = styled.p`
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
  width: 96.6%;
  height: 100%;
  border-radius: var(--br-6xs);
  border: 4px solid var(--color-darkturquoise);
  pointer-events: none;
`;
const Frame = styled.div`
  position: relative;
  border-radius: var(--br-6xs);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  overflow: visible;
`;

const Inner = styled.div`
  position: relative;
  width: 226px;
  height: 277px;
  border-radius: var(--br-6xs);
  overflow: hidden;
`;

export default ProjectPost;
