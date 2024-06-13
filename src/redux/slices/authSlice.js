import { createSlice } from "@reduxjs/toolkit";

//초기 상태값
const initialState = {
  isAuthenticated: localStorage.getItem("accessToken") ? true : false,
  userId: "",
  nickname: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      localStorage.setItem("accessToken", user.accessToken);
      state.isAuthenticated = true;
      state.userId = user.userId;
      state.nickname = user.nickname;
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
