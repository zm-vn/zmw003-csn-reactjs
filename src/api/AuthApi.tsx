import { ApiCore } from "./ApiCore"
import { User } from "../models/User"

export class AuthApi extends ApiCore {
  public static login(username: string, password: string) {
    return this.post<User>('auth/login', { username, password })
  }
}
