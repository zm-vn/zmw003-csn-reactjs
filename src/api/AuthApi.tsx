import { ApiCore } from "./ApiCore"
import { User } from "../models/User"
import axios from "axios"

export interface LoginResponse {
  accessToken?: string
  refreshToken?: string
}

const ACCESS_TOKEN_KEY = 'novel-access-token'
const REFRESH_TOKEN_KEY = 'novel-refresh-token'

export class AuthApi extends ApiCore {
  public static profile() {
    return this.get<User>('user')
  }

  public static login(username: string, password: string) {
    return this.post<LoginResponse>('auth/login', { username, password })
  }

  public static saveCredentials(accessToken: string, refreshToken: string, remember = false) {
    const storage = remember ? localStorage : sessionStorage
    storage.setItem(ACCESS_TOKEN_KEY, accessToken)
    storage.setItem(ACCESS_TOKEN_KEY, refreshToken)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  }

  public static clearCredentials() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    sessionStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    delete axios.defaults.headers.common['Authorization']
  }
}
