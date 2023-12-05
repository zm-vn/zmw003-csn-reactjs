import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material"
import { BaseDialog } from "./BaseDialog"
import { useTranslation } from "react-i18next"
import { TextInput } from "../input/TextInput"
import { PasswordInput } from "../input/PasswordInput"

export const LoginDialog = () => {
  const { t } = useTranslation()

  return <BaseDialog open={true} sx={{ minWidth: 300 }}>
    <DialogTitle>{t('Login')}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <form>
          <Grid container={true} spacing={2} sx={{ paddingY: 2 }}>
            <Grid item={true} xs={16}><TextInput label={t("Username")}/></Grid>
            <Grid item={true} xs={16}><PasswordInput label={t("Password")}/></Grid>
          </Grid>
        </form>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>{t("Login")}</Button>
      <Button>{t("Cancel")}</Button>
    </DialogActions>
  </BaseDialog>
}
