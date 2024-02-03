import { FormInputProps } from "../../types/Input"
import { TextField } from "@mui/material"

export interface TextInputProps extends FormInputProps<string> {

}

export const TextInput = ({ label, value, onChange }: TextInputProps) => {
  return <TextField fullWidth={true} label={label} value={value} onChange={evt => onChange?.(evt.target.value)}/>
}
