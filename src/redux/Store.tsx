import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { ConfigSlice } from "./ConfigSlice"
import { AuthSlice } from "./AuthSlice"

const reducers = {
  config: ConfigSlice.reducer,
  app: AuthSlice.reducer,
  auth: AuthSlice.reducer,
}

export const store = configureStore({
  reducer: reducers,
})

const rootReducer = combineReducers(reducers)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
// export const { dispatch } = store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
