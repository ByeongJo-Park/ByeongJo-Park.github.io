import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // reducer 파일에서 가져오기

// Redux Store 생성
const store = configureStore({
    reducer: rootReducer,
});

export default store;