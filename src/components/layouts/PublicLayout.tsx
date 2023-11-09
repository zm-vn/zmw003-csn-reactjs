import { Outlet } from "react-router-dom"
import { Box, Container, styled } from "@mui/material"
import { Header } from "./Header"
import { MainWrapper } from "./MainWrapper"
import { PageWrapper } from "./PageWrapper"

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
  </MainWrapper>
}

export default PublicLayout
