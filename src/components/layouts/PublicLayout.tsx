import { Outlet } from "react-router-dom"
import { Box, Container, styled } from "@mui/material"
import { Header } from "./Header"

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}))

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  backgroundColor: 'transparent',
}))

const PublicLayout = () => {
  return <MainWrapper>
    <PageWrapper
      className="page-wrapper">
      <Header/>
      <Container>
        <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
          <Outlet/>
        </Box>
      </Container>
    </PageWrapper>
  </MainWrapper>
}

export default PublicLayout
