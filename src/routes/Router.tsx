import { useRoutes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectedRouter"
import { PublicRouter } from "./PublicRouter"
import { useAppSelector } from "../redux/Store"

export const Router = () => {
  const authState = useAppSelector(state => state.auth)
  const isAuth = !!authState.token
  const routes = useRoutes(isAuth ? ProtectedRouter : PublicRouter)
  return routes
}
