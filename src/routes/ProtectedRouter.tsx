import { Loadable } from "../components/common/Loadable"
import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const Home = Loadable(lazy(() => import('../pages/Home')))

export const ProtectedRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
  },
]
