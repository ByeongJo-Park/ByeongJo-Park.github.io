import React from 'react';
import Intro from './pages/Intro';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import store from './store';

// import Carousel from './components/Carousel';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='flex flex-col bg-black sm:px-20 lg:px-52 min-w-[500px]'>
        <Intro/>
        <Main/>
      </div>
    </Provider>
  )
}

export default App