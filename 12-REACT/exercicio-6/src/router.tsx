import { createBrowserRouter } from "react-router-dom";
import RootLayount from "./pages/RootLayount";
import Home from "./pages/Home";
import StockItems from "./pages/StockItems";
import Item from "./pages/Item";
import NewItem from "./pages/NewItem";
import loadItem from "./loaders/items"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayount />,
    children: [{
      index: true,
      element: <Home />
    },
    {
      path: 'stock',
      element: <StockItems />
      },
    {
      path: 'stock/:itemId',
      element: <Item />,
      loader: loadItem
    },
    {
      path: 'newItem',
      element: <NewItem />
    }
  ]
}
]
)

export default router