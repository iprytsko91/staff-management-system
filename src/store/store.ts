import { configureStore } from "@reduxjs/toolkit";

import { smsSlice } from "./sms"

export const store = configureStore({
  reducer: {
    sms: smsSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
