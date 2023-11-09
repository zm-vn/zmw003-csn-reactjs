import { Loadable } from "../components/common/Loadable"
import { lazy } from "react"
import { RouteObject } from "react-router-dom"


const Home = Loadable(lazy(() => import('../pages/Home')))
const ProtectedLayout = Loadable(lazy(() => import('../components/layouts/ProtectedLayout')))

export const ProtectedRouter: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout/>,
    children: [
      { path: '/', element: <Home/> },
    ],
  },
]
