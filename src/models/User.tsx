import { BaseModel } from "./BaseModel"

export class User extends BaseModel {
  username?: string
  email?: string
  phone?: string
  avatar?: string
  dob?: string
  role?: number
}
