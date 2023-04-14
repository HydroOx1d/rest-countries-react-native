import { configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "./slices/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countryReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})