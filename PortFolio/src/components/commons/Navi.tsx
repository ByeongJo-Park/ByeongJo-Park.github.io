import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../action/viewAction';

const Navi: React.FC = () => {
    const dispatch = useDispatch();

    const changeView = (view: string) => {
        dispatch(setView(view));
    };

    return (
        <nav className="w-40 h-28 m-2 p-2 sticky top-0 z-10 flex flex-col border border-point-gray rounded-xl bg-light-black text-point-gray font-frs-b">
            <span className='m-1 px-1 hover:text-gray' onClick={() => changeView("Home")}>Home</span>
            <span className='m-1 px-1 hover:text-gray' onClick={() => changeView("Project")}>Project</span>
            <span className='m-1 px-1 hover:text-gray' onClick={() => changeView("Contact")}>Contact</span>
        </nav>
    );
};

export default Navi;