import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "../slices/expenseSlice";
import btnSlice from "../slices/btnSlice";

const store = configureStore({
  reducer: {
    expense: expenseSlice,
    btn: btnSlice,
  },
});

export default store;
