import { configureStore } from "@reduxjs/toolkit";
import expense from "../slices/expenseSlice";
import btn from "../slices/btnSlice";
import auth from "../slices/AuthSlice";

const store = configureStore({
  reducer: {
    expense,
    btn,
    auth,
  },
});

export default store;
