import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: false,
  signUpModal: false,
  communityModal: false,
  userModal: false,
  createCommunityModal: false,
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

    openCreateCommunityModal: (state) => {
      state.createCommunityModal = true;
    },

    closeCreateCommunityModal: (state) => {
      state.createCommunityModal = false;
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
  openCreateCommunityModal,
  closeCreateCommunityModal,
} = authSlice.actions;

export default authSlice.reducer;
