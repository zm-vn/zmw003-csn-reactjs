import { MainWrapper } from "./MainWrapper"
import { PageWrapper } from "./PageWrapper"
import { Header } from "./Header"
import { Box, Container } from "@mui/material"
import { Outlet } from "react-router-dom"

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
  </MainWrapper>
}

export default ProtectedLayout
