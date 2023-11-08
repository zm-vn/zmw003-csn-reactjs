import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import { useAppSelector } from "../../redux/Store"

export const Header = () => {
  const customizer = useAppSelector((state) => state.config)
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.topbarHeight,
    },
  }))
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }))
  return <AppBarStyled position={"sticky"} color={"default"}>
    <ToolbarStyled>
      <Typography variant={"h1"}>HEADER</Typography>
    </ToolbarStyled>
  </AppBarStyled>
}
