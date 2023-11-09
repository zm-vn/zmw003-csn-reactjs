import { Box, Button, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Backspace } from "@mui/icons-material"

const CreateNovel = () => {
  const navigate = useNavigate()
  return <Stack spacing={2}>
    <Toolbar>
      <Typography variant={"h3"}>Create new novel</Typography>
      <Box flexGrow={1}/>
      <Button variant={"text"} onClick={() => navigate(-1)} startIcon={<Backspace/>}>BACK</Button>
    </Toolbar>
    <Stack>
      <form>
        <TextField title={"Title"}/>
      </form>
    </Stack>
  </Stack>
}
export default CreateNovel
