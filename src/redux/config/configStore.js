import { configureStore } from "@reduxjs/toolkit";
import btn from "../slices/btnSlice";
import auth from "../slices/authSlice";

const store = configureStore({
  reducer: {
    btn,
    auth,
  },
});

export default store;
