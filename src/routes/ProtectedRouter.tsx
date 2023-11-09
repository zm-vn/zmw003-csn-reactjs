import { Loadable } from "../components/common/Loadable"
import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"

const EditorHome = Loadable(lazy(() => import('../pages/editor/EditorHome')))
const CreateNovel = Loadable(lazy(() => import('../pages/editor/CreateNovel')))
const ProtectedLayout = Loadable(lazy(() => import('../components/layouts/ProtectedLayout')))

export const ProtectedRouter: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout/>,
    children: [
      { path: '/', element: <EditorHome/> },
      { path: '/create', element: <CreateNovel/> },
      { path: '*', element: <Navigate to={"/"}/> },
    ],
  },
]
