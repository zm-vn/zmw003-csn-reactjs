import { AppBar, Box, IconButton, Stack, styled, Toolbar, Typography } from "@mui/material"
import { useAppSelector } from "../../redux/Store"
import { Login, Logout } from "@mui/icons-material"


export const Header = () => {
  const configState = useAppSelector((state) => state.config)
  const authState = useAppSelector(state => state.auth)

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
  return <AppBarStyled position={"sticky"} color={"secondary"}>
    <ToolbarStyled>
      <Typography>LOGO HERE</Typography>
      <Box flexGrow={1}/>
      <Stack spacing={1} direction="row" alignItems="center">
        <IconButton>
          {authState.token ? <Logout/> : <Login/>}
        </IconButton>
      </Stack>
    </ToolbarStyled>
  </AppBarStyled>
}
