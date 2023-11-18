"use client";
import MyPage from "./components/MyPage";

const styles = {
  fullScreen: {
    width: "100vw", // 뷰포트 너비 전체
    overflowY: "auto" /* 내용이 넘칠 때 수직 스크롤이 생기도록 설정합니다. */,
    display: "flex", // 내부 요소들을 수평 또는 수직으로 배치하기 위해 사용합니다.
    justifyContent: "center", // 수평 정렬을 가운데로 설정합니다.
    alignItems: "center", // 수직 정렬을 가운데로 설정합니다.
  },
};

export default function Home() {
  return (
    <div style={styles.fullScreen}>
      <MyPage></MyPage>
    </div>
  );
}
