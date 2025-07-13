import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRooms } from "@/http/use-rooms"
import { dayjs } from "@/lib/dayjs"
import { Link } from "react-router"

export const RoomList = () => {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
        <CardContent className="flex flex-col gap-3">
          {isLoading && (
            <p className="text-muted-foreground text-sm">Carregando salas...</p>
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
                      {room.questionsCount} perguntas(s)
                    </Badge>
                  </div>
                </div>
              </Link>
            )
          })}
        </CardContent>
      </CardHeader>
    </Card>
  )
}
