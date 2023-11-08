import { createSlice } from "@reduxjs/toolkit"

interface ConfigState {
  activeMode?: "dark" | "light"
  activeTheme?: string
  topbarHeight: number
}

const initialState: ConfigState = {
  activeMode: "dark",
  activeTheme: "BLUE_THEME",
  topbarHeight: 170,
}

export const ConfigSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.activeTheme = action.payload
    },
    setDarkMode: (state, action) => {
      state.activeMode = action.payload
    },
  },
})
