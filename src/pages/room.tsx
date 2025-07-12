import { useParams } from "react-router"

type RoomParams = {
  roomId: string
}

export const Room = () => {
  const params = useParams<RoomParams>()
    
  return (
    <div>
      <div>Room Page</div>

      <p>{params.roomId}</p>
    </div>
  )
}