import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserModel } from "../../shared/models";
import { smsInitialState } from "./smsState.ts";

export const smsSlice = createSlice({
  name: 'sms',
  initialState: smsInitialState,
  reducers: {
    addUsers: (state, action: PayloadAction<UserModel[]>) => {
      state.users.push(...action.payload);
    },
    updateUser: (state, action: PayloadAction<UserModel>) => {
      //TODO: implement
    },
    deleteUser: (state, action: PayloadAction<UserModel>) => {
      const index = state.users.findIndex(item => item.id === action.payload.id);
      if (index > -1) {
        state.users.splice(index, 1)
      }
    },
  },
})
