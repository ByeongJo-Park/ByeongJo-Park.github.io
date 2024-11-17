import React from "react";
import nextImg from "../assets/next.png";

const MainPage: React.FC = () => {
    return (
        <div className="w-full h-[90vh] px-12 py-12 flex flex-col">
            <div className="text-white text-2xl font-frs-m border-white border-b-2">
                Front-End Developer
            </div>
            <div className="flex flex-col text-white font-frs-bl text-7xl mt-2 grow">
                <span className="m-2">
                    PAT's
                </span>
                <span className="m-2">
                    PORTFOLIO
                </span>
            </div>
            <div className="flex justify-center">
                <img src={nextImg} className="w-14 animate-bounce"/>
            </div>
        </div>
    );
};

export default MainPage;