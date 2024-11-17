import React from 'react';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';
// import Carousel from './components/Carousel';

const App: React.FC = () => {
    return (
        <div className='h-auto flex flex-col overflow-hidden'>
            <MainPage/>
            <ViewPage/>
        </div>
    )
}

export default App