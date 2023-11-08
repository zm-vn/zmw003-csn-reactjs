import { Suspense } from "react"
import { PageLoader } from "./PageLoader"

export const Loadable = (Component: any) => (props: any) => {
  return <Suspense fallback={<PageLoader/>}>
    <Component {...props}/>
  </Suspense>
}
