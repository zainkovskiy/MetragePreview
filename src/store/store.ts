import { configureStore } from '@reduxjs/toolkit';
import previewSlice from './previewSlice';

export const store = configureStore({
  reducer: {
    preview: previewSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;