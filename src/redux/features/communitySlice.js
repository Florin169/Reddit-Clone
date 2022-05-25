import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  singleCommunity: {},
  mySnippets: [],
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    getCommunities: (state, action) => {
      state.communities = action.payload;
    },

    getSingleCommunity: (state, action) => {
      state.singleCommunity = action.payload;
    },

    getSnippets: (state, action) => {
      state.mySnippets = action.payload;
    },

    addSnippet: (state, action) => {
      state.mySnippets = [...state.mySnippets, action.payload];
    },

    deleteSnippet: (state, action) => {
      state.mySnippets = state.mySnippets.filter(
        (item) => item.communityId !== action.payload
      );
    },
  },
});

export const {
  getCommunities,
  getSingleCommunity,
  getSnippets,
  deleteSnippet,
  addSnippet,
} = communitySlice.actions;

export default communitySlice.reducer;
