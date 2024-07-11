import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "writeList",
};

export const profileSlice = createSlice({
  name: "profile", // useSelector(state => state.슬라이스키.슬라이스키의 속성); 여기서 슬라이스키가 name:"슬라이스키" initalState가 슬라이스 속성(isLoggedIn)
  initialState,
  reducers: {
    tab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});
export const { tab } = profileSlice.actions;
export default profileSlice.reducer;
