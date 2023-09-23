import items from '../database.json'

export default function loadItem ({ params }: any) {
  const item = items.find(i => i.id === +params.itemId)

if (!item){
    throw new Response("404 not found", {status: 500})
  }

  return item
}