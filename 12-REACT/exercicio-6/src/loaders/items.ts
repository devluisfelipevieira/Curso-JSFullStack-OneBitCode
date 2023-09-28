import items from '../database.json'

interface Item {
  params: {
    itemId: number
  }
}

export default function loadItem ({ params }: Item) {
  const item = items.find(i => i.id === +params.itemId)

if (!item){
    throw new Response("404 not found", {status: 500})
  }

  return item
}