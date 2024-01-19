"use client"
import styled from "styled-components";
import React,{useState,useEffect} from "react";
import Comment from "./Comment";
const CommentPanel = () => {

    const comments = [
        {
            isMine : true,
            message : "행사 기대되네요~!",
            autherProfilePic : "images/AutherProfile2.png",
            autherName : "코기",
            wroteDate : "11:10 AM"
        },

        {
            isMine : false,
            message : "투자에 관심있으신 분들은 참여하면 좋을것 같네요~!",
            autherProfilePic : "images/AutherProfile1.png",
            autherName : "Lion",
            wroteDate : "11:10 AM"
        }
    ]
  return (
    <Frame>
        <CommentList>
        {comments.slice(0).reverse().map((commentinfo,index) =>{return(<Comment key = {index} isMine={commentinfo.isMine} message={commentinfo.message} autherProfilePic={commentinfo.autherProfilePic} autherName={commentinfo.autherName} wroteDate={commentinfo.wroteDate}></Comment>)})}
        </CommentList>
        <CommentInput></CommentInput>
    </Frame>
  );
};

const Frame = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 508px;
bottom: 0px;
border-radius: 30px;
background-color: white;
box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.15);
`;

const CommentList = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 95%;
gap: 15px;
bottom: 100px;
`;

const CommentInput = styled.div`
position: fixed;
bottom: 18px;
left: 19px;
right: 104px;
height: 47px;
border-radius: 100px;
display: flex;
flex-direction: row;
align-items: center;
`;


export default CommentPanel;