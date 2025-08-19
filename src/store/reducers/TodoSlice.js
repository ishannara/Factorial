import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoSlice: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add item
    addTodoData: (state, action) => {
      state.todoSlice.push(action.payload);
    },
    deleteTodoData: (state, action) => {
      state.todoSlice = state.todoSlice.filter(
        (item) => item.id !== action.payload
      );
    },
    updateTodoData: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.todoSlice.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.todoSlice[index] = {
          ...state.todoSlice[index],
          ...updatedFields,
        };
      }
    },
  },
});

export const { addTodoData, deleteTodoData, updateTodoData } =
  todoSlice.actions;

export default todoSlice.reducer;
