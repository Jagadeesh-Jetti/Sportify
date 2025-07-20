import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchProfileRequest(state) {
      state.loading = true;
    },
    fetchProfileSuccess(state, action) {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchProfileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
