import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { dayjs } from "@/lib/dayjs"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
  questionCount: number
  createdAt: string
}>

export const CreateRoom = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms")
      const result: GetRoomsAPIResponse = await response.json()

      return result
    },
  })

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div></div>

          <Card>
            <CardHeader>
              <CardTitle>Salas recentes</CardTitle>
              <CardDescription>
                Acesso rápido para as salas criadas recentemente
              </CardDescription>
              <CardContent className="flex flex-col gap-3">
                {isLoading && (
                  <p className="text-muted-foreground text-sm">
                    Carregando salas...
                  </p>
                )}

                {data?.map((room) => {
                  return (
                    <Link
                      to={`/rooms/${room.id}`}
                      key={room.id}
                      className="hover:bg-accent/50 flex items-center justify-between rounded-lg border p-3"
                    >
                      <div className="flex flex-1 flex-col gap-1">
                        <h3 className="font-medium">{room.name}</h3>

                        <div className="flex items-center gap-2">
                          <Badge className="text-xs" variant="secondary">
                            {dayjs(room.createdAt).toNow()}
                          </Badge>
                          <Badge className="text-xs" variant="secondary">
                            {room.questionCount} perguntas(s)
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
