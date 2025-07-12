import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"

type GetRoomsAPIResponse = Array<{
  id: string,
  name: string,
}>

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  console.log(data)
  
  return (
    <div>
      <div>CreateRoom Page</div>

      {isLoading && <p>Carregando...</p>}
      {data?.map((room) => {
        return <Link to={`/room/${room.id}`} key={room.id}>{room.name}</Link>
      })}
    </div>
  )
}