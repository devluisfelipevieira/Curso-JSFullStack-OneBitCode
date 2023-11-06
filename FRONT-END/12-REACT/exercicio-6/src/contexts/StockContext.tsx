import { createContext, useState } from "react";

interface Children {
  children: React.ReactNode;
}

export interface Item {
  name: string,
  quantity: number,
  description: string,
  price: number,
  category: string,
  id: number,
  createdAt: Date,
  updatedAt: Date
}


export const StockContext = createContext({})

export function StockContextProvider({ children }: Children) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('obc-react-stock')
    if (!storedItems) return []
    const items = JSON.parse(storedItems)
    items.forEach((item: Item) => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    })
    return items
  })

  const addItem = (item: Item) => {
    setItems((current: any) => {
      const updatedItems = [item, ...current]
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = (itemId: number) => {
    return items.find((i:Item) => i.id === itemId)
  }

  const updateItem = (itemId: number, newAttributes:any) => {
    setItems((current: any) => {
      const itemIndex = current.findIndex((i:Item) => i.id === itemId)
      const updatedItems = [...current]
      Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const deleteItem = (itemId: number) => {
    setItems((current: any) => {
      const updatedItems = current.filter((item:Item) => item.id !== itemId)
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}