import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Card from "./pages/Cart"
import AdminHome from "./pages/admin/AdminHome"
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true, //rota inicial
      element: <Home />
    },
    {
      path: "products",
      element: <Products />
    },{
      path: "cart",
      element: <Card />
    }
    ]
  },
  {
    path: "/admin",
    element: <AdminHome /> //Fora do layout
  }
])

export default router