import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  againCuedData: [],
};

export const againSlice = createSlice({
  name: "again",
  initialState,
  reducers: {
    // Add new data
    addAgainData: (state, action) => {
      state.againCuedData.push(action.payload);
    },
    // Delete data by id
    deleteAgaindata: (state, action) => {
      state.againCuedData = state.againCuedData.filter(
        (user) => user.id !== action.payload
      );
    },
    // Update data by id
    updateAgainData: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.againCuedData.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.againCuedData[index] = {
          ...state.againCuedData[index],
          ...updatedFields,
        };
      }
    },
  },
});

export const { addAgainData, deleteAgaindata, updateAgainData } = againSlice.actions;

export default againSlice.reducer;
