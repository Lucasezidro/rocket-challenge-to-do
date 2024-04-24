import { Trash, Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface CardTaskProps {
  completed: boolean
  description: string
  removeTask: () => void
}

export function CardTasks({
  description,
  removeTask,
  completed,
}: CardTaskProps) {
  return (
    <div className="bg-gray-400 mt-10 p-7 rounded-md flex items-center justify-between">
      <Checkbox.Root checked={completed}>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <span>{description}</span>

      <button onClick={removeTask}>
        <Trash />
      </button>
    </div>
  )
}
