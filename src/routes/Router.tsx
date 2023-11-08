import { lazy, useState } from "react"
import { Loadable } from "../components/common/Loadable"
import { useRoutes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectedRouter"
import { PublicRouter } from "./PublicRouter"

const Home = Loadable(lazy(() => import('../pages/Home')))

export const Router = () => {
  const [isAuth, setIsAuth] = useState(false)
  const routes = useRoutes(isAuth ? ProtectedRouter : PublicRouter)
  return routes
}
