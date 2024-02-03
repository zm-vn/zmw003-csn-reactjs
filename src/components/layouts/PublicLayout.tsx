import { Outlet } from "react-router-dom"
import { Box, Container, styled } from "@mui/material"
import { Header } from "./Header"
import { MainWrapper } from "./MainWrapper"
import { PageWrapper } from "./PageWrapper"
import React, { lazy } from "react"
import { Loadable } from "../common/Loadable"

const AppDialogs = Loadable(lazy(() => import('./AppDialogs')))

const PublicLayout = () => {
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
    {/*<AppDialogs/>*/}
  </MainWrapper>
}

export default PublicLayout
