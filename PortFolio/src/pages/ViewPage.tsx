import React from "react";
import Profile from "../components/home/Profile";
import Navi from "../components/commons/Navi";
const ViewPage: React.FC = () => {

    return (
        <div className="relative w-full h-auto px-12 py-12 flex justify-between">
            <Navi/>
            <Profile/>
        </div>
    )
}

export default ViewPage