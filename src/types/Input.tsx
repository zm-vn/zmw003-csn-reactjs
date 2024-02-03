export interface FormInputProps<T = any> {
  label: string
  value?: T
  name?: string
  onChange?: (val: T) => void
  // formControl?: Formik
}
