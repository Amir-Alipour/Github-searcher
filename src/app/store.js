import { configureStore } from '@reduxjs/toolkit';
import recentlySlice from '../features/recently/recentlySlice';
import suggestSlice from '../features/suggest/suggestSlice';

export const store = configureStore({
  reducer: {
    recently: recentlySlice,
    suggest: suggestSlice,
  },
});
