import { configureStore } from '@reduxjs/toolkit';
import earthReducer from '@/slices/earthSlice';
import venusReducer from '@/slices/venusSlice';

export const store = configureStore({
  reducer: {
    earth: earthReducer,
    venus: venusReducer
  }
});
