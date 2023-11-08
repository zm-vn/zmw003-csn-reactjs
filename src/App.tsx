import React from 'react'
import './App.css'
import { ThemeSettings } from "./styles/ThemeSettings"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"

function App() {
  const theme = ThemeSettings()
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router/>
  </ThemeProvider>
}

export default App
