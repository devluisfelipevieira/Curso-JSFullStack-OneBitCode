import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Card from "./pages/Cart"
import AdminHome from "./pages/admin/AdminHome"
import RootLayout from "./pages/RootLayout";
import Product from './pages/Product'
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

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
      path: "products/:productId",
      element: <Product />,
      loader: loadProduct,
      errorElement: <ProductBoundary />
    },
    {
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