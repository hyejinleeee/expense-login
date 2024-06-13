import { createSlice } from "@reduxjs/toolkit";

//초기 상태값
const initialState = {
  isAuthenticated: localStorage.getItem("accessToken") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const token = action.payload;
      localStorage.setItem("accessToken", token);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
