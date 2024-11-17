import React from 'react';

const Navi: React.FC = () => {
    return (
        <nav className="w-40 h-28 m-2 p-2 sticky top-0 z-10 flex flex-col border border-point-gray rounded-xl bg-light-black text-point-gray font-frs-b">
            <span className='m-1 px-1 hover:text-gray'>Home</span>
            <span className='m-1 px-1 hover:text-gray'>Project</span>
            <span className='m-1 px-1 hover:text-gray'>Contact</span>
        </nav>
    );
};

export default Navi;