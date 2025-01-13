import React, {useRef, useEffect, useState} from "react";
import Profile from "../components/contents/Profile";
import Project from "../components/contents/Project";
import Contact from "../components/contents/Contact";
import Navi from "../components/commons/Navi";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";


const Main: React.FC = () => {
    const currentView = useSelector((state: RootState) => state.view.view);
    const [height, setHeight] = useState("min-h-svh");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const height = () => {
            if(contentRef.current) {
                const contentHeight = contentRef.current.offsetHeight;
                const viewportHeight = window.innerHeight;
                const count = Math.ceil(contentHeight/viewportHeight);
                setHeight(`min-h-[${count}svh]`)
            }
        };
        height();
        window.addEventListener("resize", height);
        return () => window.removeEventListener("resize", height);
    })

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
        <div ref={contentRef} className={`relative w-full min-h-svh px-12 py-12 flex justify-between`}>
            <Navi/>
            {renderContent()}
        </div>
    )
}

export default Main