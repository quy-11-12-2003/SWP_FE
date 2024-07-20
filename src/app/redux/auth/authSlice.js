/* eslint-disable operator-assignment */
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authApi } from "../../services/auth/authApi";
import { isValidToken } from "../../../utils/tokenHelper";

// configs persist
const persistConfig = {
  key: "auth",
  storage,
};
const initialState = {
  user: {},
  isAuthenticated: false,
  token: "",
  loggedInAt: null,
  loggedOutAt: null,
};

// define slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      const token = action.payload;
      state.isAuthenticated = isValidToken(token);
      state.token = state.isAuthenticated ? token : {};
      state.loggedInAt = new Date();
    },
    signOut(state, action) {
      state.isAuthenticated = false;
      state.token = {};
      state.user = {};
      state.loggedOutAt = new Date();
    },
    setToken(state, action) {
      const token = action.payload;
      state.token = isValidToken(token) ? token : {};
    },
    resetState(state, action) {
      state = initialState;
      return state;
    },
    setUser(state, action) {
      const user = action.payload;
      const avatarUrl = `${user.avatar}?time=${new Date().getTime()}`;
      state.user = { ...user, avatar: avatarUrl };
    },
    updateAvatarUser(state, action) {
      state.user.avatar = `${action.payload}?time=${new Date().getTime()}`;
    },
    updateProfileUser(state, action) {
      const { name, username, department, signature, aboutMe, phone } =
        action.payload;
      state.user.username = username;
      state.user.name = name;
      state.user.department = department;
      state.user.signature = signature;
      state.user.aboutMe = aboutMe;
      state.user.phone = phone;
    },
    updateEmailUser(state, action) {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state = { ...initialState, loggedOutAt: new Date().toISOString() }; // reset state when logout successfully
        return state;
      }
    );
  },
});
// selecters
const selectCurrentUser = (state) => state.auth.user;
const selectAuthData = (state) => state.auth;
const selectToken = (state) => state.auth.token;
const selectIsAuthendicated = (state) => state.auth?.isAuthenticated;
const selectPermissions = (state) => state.auth?.user.permissions;
export {
  selectCurrentUser,
  selectToken,
  selectAuthData,
  selectIsAuthendicated,
  selectPermissions,
};
// reducers
export default persistReducer(persistConfig, authSlice.reducer);
// actions
export const {
  setToken,
  signIn,
  setUser,
  updateAvatarUser,
  updateProfileUser,
  resetState,
  signOut,
  updateEmailUser,
} = authSlice.actions;
