import React, {useRef, useEffect, useState} from "react";
import Profile from "../components/contents/Profile";
import Project from "../components/contents/Project";
import Contact from "../components/contents/Contact";
import Navi from "../components/commons/Navi";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";


const Main: React.FC = () => {
    const currentView = useSelector((state: RootState) => state.view.view);
    const [height, setHeight] = useState('h-1h');
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const targetHeight = () => {
            if(contentRef.current) {
                const contentHeight = contentRef.current.offsetHeight;
                const viewportHeight = window.innerHeight;
                const count = Math.ceil((contentHeight)/viewportHeight);
                console.log('ch:' + contentRef.current.offsetHeight);
                console.log('vh:' + window.innerHeight);
                console.log('count:' + count);
                setHeight(`h-${count}h`)
            }
        };
        targetHeight();
        window.addEventListener("resize", targetHeight);
        return () => window.removeEventListener("resize", targetHeight);
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
        <div className={`relative w-full px-12 py-12 flex justify-between ${height}`}>
            <Navi/>
            <div ref={contentRef} className="content-wrapper">
                {renderContent()}
            </div>
        </div>
    )
}

export default Main