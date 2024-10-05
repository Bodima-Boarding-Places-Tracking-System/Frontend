import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the user and token
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.currentUser = user;
      state.token = token;
    },
    // Action to log out
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;
