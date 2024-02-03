import { useRoutes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectedRouter"
import { PublicRouter } from "./PublicRouter"
import { useAppSelector } from "../redux/Store"

export const Router = () => {
  const authState = useAppSelector(state => state.auth)
  const isAuth = !!authState.token
  return useRoutes(isAuth ? ProtectedRouter : PublicRouter)
}
