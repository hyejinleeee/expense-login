import { createSlice } from "@reduxjs/toolkit";

//초기 상태값
const defaultMonth = 2;
const initialState =
  JSON.parse(localStorage.getItem("selectedMonth")) ?? defaultMonth;

const btnSlice = createSlice({
  name: "btn",
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedMonth } = btnSlice.actions;
export default btnSlice.reducer;
