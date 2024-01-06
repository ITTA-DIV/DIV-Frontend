"use client"
import styled from "styled-components";
const LoginButton = ({backgroundColor = "black",logoImg,text}) => {

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 462px;
  height: 70px;
  border-radius: 20px;
  background-color: ${backgroundColor};
`;

const Logo = styled.img`
  position: absolute;
  left: 23px;
  width: 30px;
  height: 30px;
`;

const Text = styled.text`
  position: relative;
  font-family: "PretendardSemiBold";
  font-size: 24px;
  color: black;
`;

  return (
<Frame>
    <Logo src ={logoImg}></Logo>
    <Text>{text}</Text>
</Frame>
  );

};



export default LoginButton;
