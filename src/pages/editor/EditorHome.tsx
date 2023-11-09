import { Button, Grid, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

const EditorHome = () => {
  const navigate = useNavigate()
  return <Stack>
    <Grid container>
      <Button onClick={() => navigate('create')}>Create</Button>
    </Grid>
  </Stack>
}
export default EditorHome
