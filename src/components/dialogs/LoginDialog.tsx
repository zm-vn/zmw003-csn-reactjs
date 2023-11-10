import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { BaseDialog } from "./BaseDialog"
import { useTranslation } from "react-i18next"

export const LoginDialog = () => {
  const { t } = useTranslation()

  return <BaseDialog open={true} sx={{ minWidth: 300 }}>
    <DialogTitle>{t('Login')}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <form>

        </form>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>Disagree</Button>
      <Button>Agree</Button>
    </DialogActions>
  </BaseDialog>
}
