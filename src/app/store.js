import { configureStore } from '@reduxjs/toolkit';
import recentlySlice from '../features/recently/recentlySlice';
import suggestSlice from '../features/suggest/suggestSlice';
import profileSlice from '../features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    recently: recentlySlice,
    suggest: suggestSlice,
    profile: profileSlice
  },
});
