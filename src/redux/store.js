import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import communitySlice from "./features/communitySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    community: communitySlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
