import React from "react";
import nextImg from "../assets/next.png";

const MainPage: React.FC = () => {
  return (
    <div className="w-full h-svh px-12 pt-24 pb-12 flex flex-col">
      <div className="text-white text-2xl font-frs-m border-white border-b-2">
        Front-End Developer
      </div>
      <div className="flex flex-col text-white text-6xl mt-4 grow leading-tight bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        <span className="m-2 font-frs-bl text-transparent ">
          사용자 경험을 설계하고,
        </span>
        <span className="m-2 font-frs-bl text-transparent">
          코드를 구현합니다
        </span>
        <span className="m-2 text-xl text-gray font-bold">Pat's Portfolio</span>
      </div>
      <div className="flex justify-center">
        <img src={nextImg} className="w-14 animate-bounce" alt="Scroll down" />
      </div>
    </div>
  );
};

export default MainPage;
