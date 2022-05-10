import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: false,
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
  },
});

export const { openModal, closeModal } = authSlice.actions;

export default authSlice.reducer;
