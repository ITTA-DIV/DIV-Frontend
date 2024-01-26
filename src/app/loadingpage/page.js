"use client";
import React, { useEffect, useState, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { logIn } from "../actions/Actions";
import { useDispatch } from "react-redux";
import { setUserName,setUserProfile,setAccessToken,setRefreashToken } from "../actions/Actions";
const LoadingPage = forwardRef((props, ref) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [code, setcode] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // 현재 url에서 code 부분 추출
    const params = new URLSearchParams(window.location.search);
    setcode(params.get("code"));
    setIsLoading(false); // Mark loading as false when done
  }, []);
  
  // 이미 가입한 유저일 시 : 메인 페이지로 이동
  const handleHome = () => {
    dispatch(logIn());
    router.push("/mainpage");
  };

  const updateUserData = async (accessToken) =>{
    try{
    await fetch("http://localhost:8080/api/v1/member", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      },
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(accessToken);
      console.log(res);
      dispatch(setUserName(res.data.username))
      dispatch(setUserProfile(res.data.profile))
    })
  }
  catch(error){
    console.log(error);
  }
  }

  useEffect(() => {
    const handleLoginPost = async (code) => {
      try {
        await fetch("http://localhost:8080/api/v1/member/login/oauth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            code: code,
          },
        })
          .then((res) => res.json()) // 리턴값이 있으면 리턴값에 맞는 req 지정
          .then((res) => {
          const accessToken = res.data.accessToken;
          const refreshToken = res.data.refreshToken;
          dispatch(setAccessToken(accessToken));
          dispatch(setRefreashToken(refreshToken));
          updateUserData(accessToken);
          });
        handleHome();
      } catch (error) {
        console.log(error);
      }
    };

    if (code) {
      handleLoginPost(code);
    } else {
      console.log("로그인 재시도하세요.");
    }
  }, [code]);

  return <>{isLoading ? null : <h2>로그인 중입니다...</h2>}</>;
});

LoadingPage.displayName = "LoadingPage"; // displayName 설정

export default LoadingPage;
