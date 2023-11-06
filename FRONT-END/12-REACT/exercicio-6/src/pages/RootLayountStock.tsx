import { Outlet } from "react-router-dom"
import ItensBar from "../components/ItemsBar"

export default () => {
  return(
    <>
      <ItensBar />
      <Outlet />
    </>
  )
}