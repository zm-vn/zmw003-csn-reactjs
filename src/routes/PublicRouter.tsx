import { RouteObject } from "react-router-dom"
import { Loadable } from "../components/common/Loadable"
import { lazy } from "react"

const PublicLayout = Loadable(lazy(() => import('../components/layouts/PublicLayout')))
const Home = Loadable(lazy(() => import('../pages/Home')))

export const PublicRouter: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout/>,
    children: [
      { path: '/', element: <Home/> },
    ],
  },
]
