import { configureStore, Action } from '@reduxjs/toolkit';
import cardReducer from './productSlice';

export const store = configureStore({
  reducer: {
    page: cardReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
