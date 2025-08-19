import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crudData: [],
};

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    // Add new data
    addCrudData: (state, action) => {
      state.crudData.push(action.payload);
    },
    // Delete data by id
    deleteCrudData: (state, action) => {
      state.crudData = state.crudData.filter(
        (user) => user.id !== action.payload
      );
    },
    // Update data by id
    updateCrudData: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.crudData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.crudData[index] = {
          ...state.crudData[index],
          ...updatedFields,
        };
      }
    },
  },
});

export const { addCrudData, deleteCrudData, updateCrudData } =
  crudSlice.actions;

export default crudSlice.reducer;
