import { createSlice } from '@reduxjs/toolkit';

export const myListSlice = createSlice({
  name: 'toDoItemArray',
  initialState: {
    value: [],
  },
  reducers: {
    addNewItemToArray: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clearArrayItems: (state) => {
      state.value = [];
    },
  },
});

export const { addNewItemToArray, clearArrayItems } = myListSlice.actions;

export const selectToDoItemArray = (state) => state.toDoItemArray.value;

export default myListSlice.reducer;
