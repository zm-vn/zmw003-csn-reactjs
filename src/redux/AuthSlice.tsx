import { createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "./Store"
import { AuthApi } from "../api/AuthApi"

interface AuthState {
  token?: string
}

const initialState: AuthState = {}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: { type: string, payload: AuthState }) => {
      state.token = action.payload.token
    },
    logout: state => state.token = undefined,
  },
})

const { actions } = AuthSlice

export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(actions.login({ token: `${email}-${password}` }))
  }
}

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    AuthApi.clearCredentials()
    dispatch(actions.logout())
  }
}
