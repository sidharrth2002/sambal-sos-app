import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      cookie.get("user") !== undefined ? JSON.parse(cookie.get("user")) : {},
    isAuthenticated: cookie.get("accessToken") ? true : false,
    accessToken: cookie.get("accessToken") ? cookie.get("accessToken") : "",
  },
  // fix all this
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      cookie.set("user", JSON.stringify(action.payload.user));
      cookie.set("isAuthenticated", true);
      cookie.set("accessToken", action.payload.accessToken);
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      state.accessToken = "";
      state.user = null;
      cookie.set("user", null);
      cookie.set("isAuthenticated", false);
      cookie.set("accessToken", "");
    },
    UPDATE: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { LOGIN, LOGOUT, UPDATE_USER } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.isAuthenticated;
export const selectUser = (state) => state.user;
export default authSlice.reducer;
