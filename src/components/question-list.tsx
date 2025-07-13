import { useRoomQuestions } from "@/http/use-room-question"
import { QuestionItem } from "./question-item"

interface QuestionListProps {
  roomId: string
}

export const QuestionList = ({ roomId }: QuestionListProps) => {
  const { data } = useRoomQuestions(roomId)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-2xl font-semibold">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question) => {
        return <QuestionItem key={question.id} question={question} />
      })}
    </div>
  )
}
