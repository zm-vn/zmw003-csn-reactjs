import { MainWrapper } from "./MainWrapper"
import { PageWrapper } from "./PageWrapper"
import { Header } from "./Header"
import { Box, Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Loadable } from "../common/Loadable"
import { lazy } from "react"

const AppDialogs = Loadable(lazy(() => import('./AppDialogs')))
const ProtectedLayout = () => {
  return <MainWrapper>
    <PageWrapper
      className="page-wrapper">
      <Header/>
      <Container sx={{ maxWidth: '100%!important' }}>
        <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
          <Outlet/>
        </Box>
      </Container>
    </PageWrapper>
    <AppDialogs/>
  </MainWrapper>
}

export default ProtectedLayout
