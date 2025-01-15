import React from "react";
import Profile from "../components/contents/Profile";
import Project from "../components/contents/Project";
import Contact from "../components/contents/Contact";
import Navi from "../components/commons/Navi";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";


const Main: React.FC = () => {
    const currentView = useSelector((state: RootState) => state.view.view);

    const renderContent = () => {
        switch (currentView) {
            case "Home":
                return <Profile/>
            case "Project":
                return <Project/>
            case "Contact":
                return <Contact/>
            default:
                return <div className="text-center">404: Page Not Found</div>;
        }
    }
    return (
        <div className={`relative w-full px-12 py-12 flex justify-between min-h-svh`}>
            <Navi/>
            {renderContent()}
        </div>
    )
}

export default Main