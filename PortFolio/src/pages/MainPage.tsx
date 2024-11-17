import React from "react";

const MainPage: React.FC = () => {

    return (
        <div className=" bg-black w-full h-dvh px-72 py-32">
            <div className="text-white text-2xl font-frs-m border-white border-b-2">
                Front-End Developer
            </div>
            <div className="flex flex-col text-white font-frs-bl text-7xl mt-2">
                <span className="m-2">
                    PAT's
                </span>
                <span className="m-2">
                    PORTFOLIO
                </span>
            </div>
        </div>
    )
}

export default MainPage