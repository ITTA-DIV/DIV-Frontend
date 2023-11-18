"use client";
import React from "react";
import styled from "styled-components";
// import calendarIcon from "../img/calendarIcon.png";
// import heartIcon from "../img/heartIcon.png";
// import alarmImg from "../img/alarm.png";

export default function MyPage() {
  return (
    <MyPageWrap>
      <div className="header">
        <div className="text-container">
          <span>Profile</span>
          <span>Settings</span>
        </div>
        <div className="profile-img"></div>
      </div>

      <h1 className="hello">Hello, Linda</h1>

      <div className="btn-container">
        <div>{/* <img src={calendarIcon} alt="calendarIcon" /> */}</div>
        <div>{/* <img src={heartIcon} alt="heartIcon" /> */}</div>
        <div></div>
      </div>

      <div className="footer">
        <h2>알림 목록</h2>
        <div className="alarm-container">
          <div className="alarm"></div>
          <div className="alarm"></div>
          <div className="alarm"></div>
          <div className="alarm"></div>
        </div>
      </div>
    </MyPageWrap>
  );
}

const MyPageWrap = styled.div`
  width: 494px;

  border-radius: 28px 0px 0px 28px;
  background: #000;

  padding: 56px 60px 26px 60px;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text-container {
      color: #fff;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      display: flex;
      gap: 40px;
    }
    .profile-img {
      width: 52px;
      height: 52px;
      border-radius: 20px;
      background: #454545;
    }
  }

  .hello {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 145px;
  }

  .btn-container {
    display: flex;
    gap: 10px;
    margin-top: 45px;

    div {
      width: 158px;
      height: 210px;
      border-radius: 20px;
      background: #454545;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 26px;

    margin-top: 59px;

    h2 {
      color: #fff;
      font-size: 23px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .alarm-container {
      display: flex;
      flex-direction: column;
      gap: 35px;

      .alarm {
        width: 231px;
        height: 48px;
        background-color: rgba(177, 177, 205, 1);
        border-radius: 15px;
      }
    }
  }
`;
