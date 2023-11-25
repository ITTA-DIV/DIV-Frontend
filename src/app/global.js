"use client"
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-pretendardBold: Pretendard-Bold;

/* font sizes */
--font-size-mini: 15px;
--font-size-2xs: 11px;
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-22xl: 41px;

/* Colors */
--color-darkturquoise: #3bc1c6;
--color-white: #fff;
--color-black: #000;
--color-gray-100: rgba(255, 255, 255, 0.35);
--color-gray-200: rgba(255, 255, 255, 0.7);
--color-gainsboro: #d9d9d9;
--color-dimgray: #6b6b6b;

/* Border radiuses */
--br-6xs: 7px;
--br-2xs: 11px;
--br-23xl: 42px;
--br-3xs: 10px;
--br-21xl: 40px;
--br-9981xl: 10000px;

}
`;
