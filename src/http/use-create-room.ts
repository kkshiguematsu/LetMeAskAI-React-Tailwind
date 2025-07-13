import { useMutation } from "@tanstack/react-query"
import type { CreateRoomsRequest } from "./types/create-room-request-type"
import type { CreateRoomResposne } from "./types/create-room-response-type"

export function useCreateRoom() {
  return useMutation({
    mutationFn: async (data: CreateRoomsRequest) => {
      const response = await fetch("http://localhost:3333/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result: CreateRoomResposne = await response.json()

      return result
    },
  })
}
