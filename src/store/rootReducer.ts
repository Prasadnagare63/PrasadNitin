// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../redux/slices/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
