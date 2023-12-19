"use client";
import PageFrame from "./components/PageFrame";
import "./globals.css";
import store from "./store/Store";
import { Provider } from "react-redux";
export default function Home() {
  return (
    <Provider store={store}>
      <PageFrame></PageFrame>
    </Provider>
  );
}


