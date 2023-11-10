import React, { lazy } from 'react'
import './assets/css/App.css'
import { ThemeSettings } from "./styles/ThemeSettings"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { Loadable } from "./components/common/Loadable"

const AppDialog = Loadable(lazy(() => import('./components/layouts/AppDialogs')))

function App() {
  const theme = ThemeSettings()
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router/>
  </ThemeProvider>
}

export default App
