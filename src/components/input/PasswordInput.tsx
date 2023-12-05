import { FormInputProps } from "../../types/Input"
import { TextField } from "@mui/material"

export interface PasswordInputProps extends FormInputProps<string> {

}

export const PasswordInput = ({ label, value, onChange }: PasswordInputProps) => {
  return <TextField fullWidth={true} label={label} value={value} onChange={evt => onChange?.(evt.target.value)}/>
}
