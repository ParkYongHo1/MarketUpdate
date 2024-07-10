import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailError: false,
  passwordError: false,
  isLoggedIn: false,
  user: {
    userEmail: "",
    userPassword: "",
    userName: "",
    userBirth: "",
    userAddress: "",
    userCategory: [],
    userPhone: "",
    latitude: "",
    longitude: "",
  },
  fetchEmail: [],
};

export const userSlice = createSlice({
  name: "user", // useSelector(state => state.슬라이스키.슬라이스키의 속성); 여기서 슬라이스키가 name:"슬라이스키" initalState가 슬라이스 속성(isLoggedIn)
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        userEmail: "",
        userPassword: "",
        userName: "",
        userBirth: "",
        userAddress: "",
        userCategory: [],
        userPhone: "",
        latitude: "",
        longitude: "",
      };
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    emailError: (state) => {
      state.emailError = true;
    },
    passwordError: (state) => {
      state.passwordError = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    fetchEmail: (state, action) => {
      state.fetchEmail = action.payload;
    },
  },
});
export const {
  login,
  logout,
  signup,
  emailError,
  passwordError,
  setUser,
  fetchEmail,
} = userSlice.actions;
export default userSlice.reducer;
