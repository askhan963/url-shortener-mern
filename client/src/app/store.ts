import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './UrlSlice';

const store = configureStore({
  reducer: {
    urls: urlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
