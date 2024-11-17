import React from 'react';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';
// import Carousel from './components/Carousel';

const App: React.FC = () => {
    return (
        <div className='h-auto flex flex-col gap-4 py-20 bg-black sm:px-20 lg:px-52 min-w-[500px]'>
            <MainPage/>
            <ViewPage/>
        </div>
    )
}

export default App