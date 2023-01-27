import { configureStore } from '@reduxjs/toolkit';
import myListSliceReducer from './myListSlice';

export default configureStore({
  reducer: {
    toDoItemArray: myListSliceReducer,
  },
});
