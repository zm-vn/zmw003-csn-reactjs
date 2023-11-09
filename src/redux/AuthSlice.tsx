import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "./Store"

interface AuthState {
  token?: string
}

const initialState: AuthState = {}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token
    },
    logout: state => state.token = undefined,
  },
})

const { actions } = AuthSlice

export const login = (email: string, password: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(actions.login({ token: `${email}-${password}` }))
  }
}

export const logout = () => {
  return (dispatch: AppDispatch) => {
    dispatch(actions.logout())
  }
}
