import { AppBar, Box, IconButton, Stack, styled, Toolbar, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../redux/Store"
import { Login, Logout } from "@mui/icons-material"
import { login, logout } from "../../redux/AuthSlice"


export const Header = () => {
  const configState = useAppSelector((state) => state.config)
  const authState = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: configState.topbarHeight,
    },
  }))
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }))

  const toggleLogin = () => {
    dispatch(authState.token ? logout() : login("test", 'test'))
  }
  console.log(authState)

  return <AppBarStyled position={"sticky"} color={"secondary"}>
    <ToolbarStyled>
      <Typography>LOGO HERE</Typography>
      <Box flexGrow={1}/>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton onClick={toggleLogin}>
          {authState.token ? <Logout/> : <Login/>}
        </IconButton>
      </Stack>
    </ToolbarStyled>
  </AppBarStyled>
}
