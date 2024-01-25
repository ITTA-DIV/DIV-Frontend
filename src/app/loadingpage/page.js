"use client";
import React, { useEffect, useState,forwardRef } from "react";
import { useRouter } from 'next/navigation';
const LoadingPage = forwardRef((props,ref) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [code, setcode] = useState("")

  useEffect(() => {
    setIsLoading(false); // Mark loading as false when done
  }, []);

  // 이미 가입한 유저일 시 : 메인 페이지로 이동
  const handleHome = () => {
    router.push("/mainpage");
  };

  useEffect(() => {
      // 현재 url에서 code 부분 추출
  const params = new URLSearchParams(window.location.search);
  setcode(params.get("code"));

  const handleLoginPost = async (code) => {
    // const data = {
    //   "Header-Key": "",
    //   "code": code,
    // };
    try {
      await fetch("http://localhost:8080/api/v1/member/login/oauth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "code": code
        },
        // body: JSON.stringify(data), //실제 데이터 파싱하여 body에 저장
      })
        .then((res) => res.json()) // 리턴값이 있으면 리턴값에 맞는 req 지정
        .then((res) => {
          console.log(res); // 리턴값에 대한 처리
        });

      // 토큰 localstorage에 저장
      //   const accessToken = res.data.accessToken;
      //   localStorage.setItem("bagtoken", accessToken);

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

  return <>
  {isLoading ? null : <h2>로그인 중입니다...</h2>}
  </>;
});

LoadingPage.displayName = "LoadingPage"; // displayName 설정

export default LoadingPage;
