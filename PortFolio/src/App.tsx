import React from 'react';
import MainPage from './pages/MainPage';
import ViewPage from './pages/ViewPage';
import { Provider } from 'react-redux';
import store from './store';

// import Carousel from './components/Carousel';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className='h-auto flex flex-col gap-4 py-20 bg-black sm:px-20 lg:px-52 min-w-[500px]'>
                <MainPage/>
                <ViewPage/>
            </div>
        </Provider>
    )
}

export default App