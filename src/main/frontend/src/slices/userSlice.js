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
    id: "",
    level: "",
    profile_image: "",
    auth: "",
    email: "",
    password: "",
    nickname: "",
    birth: "",
    category: [],
    phone: "",
    location: {
      adderss: "",
      latitude: "",
      longitude: "",
    },
    manner_temp: "",
  },
  jwt: {
    accessToken: "",
    refreshToken: "",
    expirationTime: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        id: "",
        level: "",
        profile_image: "",
        auth: "",
        email: "",
        password: "",
        nickname: "",
        birth: "",
        category: [],
        phone: "",
        location: {
          adderss: "",
          latitude: "",
          longitude: "",
          jibunAddress: "",
        },
        manner_temp: "",
      };
      state.jwt = {
        accessToken: "",
        refreshToken: "",
        expirationTime: "",
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
    setJwt: (state, action) => {
      state.jwt = action.payload;
    },
  },
});

export const {
  login,
  logout,
  signup,
  setEmailMessage,
  setPhoneMessage,
  setUser,
  setPassword,
  setCheckPassword,
  setJwt,
} = userSlice.actions;

export default userSlice.reducer;
