import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  token?: string
}

const initialState: AuthState = {}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
  },
})
