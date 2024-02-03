import { Dialog, DialogProps } from "@mui/material"
import { Transition } from "../effects/Transition"
import { ReactElement } from "react"

export interface BaseDialogProps extends DialogProps {
  children?: ReactElement | ReactElement[]
}

export const BaseDialog = ({ children, ...props }: BaseDialogProps) => {

  return <Dialog
    TransitionComponent={Transition}
    {...props} open={true}
    keepMounted>
    {children}
  </Dialog>
}
