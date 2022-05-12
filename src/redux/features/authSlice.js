import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: false,
  signUpModal: false,
  communityModal: false,
  userModal: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModal: (state) => {
      state.authModal = true;
    },

    closeModal: (state) => {
      state.authModal = false;
    },

    openSignUpModal: (state) => {
      state.signUpModal = true;
    },

    closeSignUpModal: (state) => {
      state.signUpModal = false;
    },

    toggleCommunityModal: (state) => {
      state.communityModal = !state.communityModal;
    },

    toggleUserModal: (state) => {
      state.userModal = !state.userModal;
    },

    userInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  openSignUpModal,
  closeSignUpModal,
  userInfo,
  toggleCommunityModal,
  toggleUserModal,
} = authSlice.actions;

export default authSlice.reducer;
