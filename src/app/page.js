"use client";
import "./globals.css"
import MainPage from "./mainpage/page";
export default function Home() {
  return (
      <MainPage></MainPage>
  );
}





// "use client"
// import React, { useEffect, useState,forwardRef } from "react";

// const CorgiLoader = forwardRef((props,ref) => {

//     const [isLoading, setIsLoading] = useState(true); // Add loading state

//     useEffect(() => {
//       setIsLoading(false); // Mark loading as false when done
//     }, []);

//   return(
//     <>
//     {isLoading ? null :<div {...props}></div>} 
//     </>
//   )
// });

// CorgiLoader.displayName = "CorgLoader"; // displayName 설정

// export default CorgiLoader;

