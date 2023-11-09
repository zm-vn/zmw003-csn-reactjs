import { lazy, useState } from "react"
import { Loadable } from "../components/common/Loadable"
import { useRoutes } from "react-router-dom"
import { ProtectedRouter } from "./ProtectedRouter"
import { PublicRouter } from "./PublicRouter"
import { useAppSelector } from "../redux/Store"

const Home = Loadable(lazy(() => import('../pages/Home')))

export const Router = () => {
  const authState = useAppSelector(state => state.auth)
  const isAuth = !!authState.token
  const routes = useRoutes(isAuth ? ProtectedRouter : PublicRouter)
  return routes
}
