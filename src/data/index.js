import { configureStore } from '@reduxjs/toolkit';
import leftNavReducer from './left-nav';
export default configureStore({
  reducer: {
    leftNav: leftNavReducer,
  },
})