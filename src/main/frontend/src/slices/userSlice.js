import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailMessage: "",
  phoneMessage: "",
  isLoggedIn: false,
  isEmailTaken: "",
  isPhoneTaken: "",
  checkPassword: "",
  isNotPassword: "",
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
    setEmailMessage: (state, action) => {
      state.emailMessage = action.payload.message;
      state.isEmailTaken = action.payload.isEmailTaken;
    },
    setPhoneMessage: (state, action) => {
      state.phoneMessage = action.payload.message;
      state.isPhoneTaken = action.payload.isPhoneTaken;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPassword: (state, action) => {
      state.isNotPassword = action.payload.message;
    },
    setCheckPassword: (state, action) => {
      state.checkPassword = action.payload.message;
    },
  },
});
export const {
  login,
  logout,
  signup,
  setEmailMessage,
  setPhoneMessage,
  passwordError,
  setUser,
  fetchEmail,
  setPassword,
  setCheckPassword,
} = userSlice.actions;
export default userSlice.reducer;
