import { AppState, useAppSelector } from "../redux/Store"
import { createTheme, ThemeOptions } from "@mui/material"
import _ from 'lodash'
import { DarkThemeColors } from "./DarkThemeColors"
import { LightThemeColor } from "./LightThemeColor"
import { BaseDarkTheme } from "./BaseDarkTheme"
import { BaseLightTheme } from "./BaseLightTheme"
import { ThemeComponents } from "./ThemeComponents"
import { DarkShadows } from "./DarkShadows"
import { LightShadows } from "./LightShadows"
import { TypographyConfig } from "./TypographyConfig"

export const BuildTheme = (config: any = {}) => {
  const configState = useAppSelector((state: AppState) => state.config)
  const darkMode = configState.activeMode === "dark"
  const themeOptions = (darkMode ? DarkThemeColors : LightThemeColor).find(theme => theme.name === config.theme)
  const defaultTheme = darkMode ? BaseDarkTheme : BaseLightTheme
  const baseMode: ThemeOptions = {
    palette: {
      mode: configState.activeMode,
    },
    shape: {
      // borderRadius: customizer.borderRadius,
    },
    shadows: (darkMode ? DarkShadows : LightShadows) as any,
    typography: TypographyConfig,
  }

  const theme = createTheme(_.merge(
    {},
    baseMode,
    defaultTheme,
    themeOptions,
  ))
  theme.components = ThemeComponents(theme)
  return theme
}

export const ThemeSettings = () => {
  const activeTheme = useAppSelector((state: AppState) => state.config.activeTheme)

  return BuildTheme({
    theme: activeTheme,
  })
}
