import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    getCommunities: (state, action) => {
      state.communities = action.payload;
    },
  },
});

export const { getCommunities } = communitySlice.actions;

export default communitySlice.reducer;
