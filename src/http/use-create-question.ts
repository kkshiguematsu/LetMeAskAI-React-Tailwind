import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateQuestionRequest } from "./types/create-question-request-type"
import type { CreateRoomsResponse } from "./types/create-question-response-type"

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      )

      const result: CreateRoomsResponse = await response.json()

      return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-questions", roomId] })
    },
  })
}
