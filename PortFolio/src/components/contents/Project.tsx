import React from 'react';
import { useDispatch } from 'react-redux';
import { setProject } from '../../action/projectAction';
import { useSelector } from "react-redux";
import { RootState } from '../../reducer';
import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';

const Project: React.FC = () => {
    const dispatch = useDispatch();

    const changeProject = (project: string) => {
        dispatch(setProject(project));
    };   
    const currentView = useSelector((state: RootState) => state.project.project);
    const renderContent = () => {
        switch (currentView) {
            case "MEFI":
                return <Project1/>
            case "GRABPIC":
                return <Project2/>
            case "UKKIKKI":
                return <Project3/>
            default:
                return <div className="text-center">404: Page Not Found</div>;
        }
    }
    
    return (
        <div className="w-full bg-light-black border border-point-gray m-2 rounded-3xl px-6 py-6 text-white min-h-svh">
            <nav className="flex border border-point-gray rounded-xl bg-light-black text-point-gray font-frs-b mb-5 items-center">
                <span className='m-2 px-2 text-gray text-xl'>Projects: </span>
                <span className='m-2 pr-1 hover:text-gray text-white text-2xl' onClick={() => changeProject("MEFI")}>MEFI</span>
                <span className='m-2 px-1 hover:text-gray text-white text-2xl' onClick={() => changeProject("GRABPIC")}>Grabpic</span>
                <span className='m-2 px-1 hover:text-gray text-white text-2xl' onClick={() => changeProject("UKKIKKI")}>Ukkikki</span>
            </nav>
            {renderContent()}
        </div>
    );
};

export default Project;