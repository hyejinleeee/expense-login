import { createSlice } from "@reduxjs/toolkit";
import ExpenseLists from "../../fakeData.json";

//초기 상태값
const initialState = { lists: ExpenseLists };

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists = [...state.lists, action.payload];
    },
    delList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, delList } = expenseSlice.actions;
export default expenseSlice.reducer;
