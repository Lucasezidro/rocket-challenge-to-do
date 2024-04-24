import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Clipboard, PlusCircle, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TasksContext } from '../context/tasks-context'
import * as Checkbox from '@radix-ui/react-checkbox'

const createNewTaskFormSchema = z.object({
  task: z.object({
    description: z.string(),
  }),
})

type CreateNewTaskFormData = z.infer<typeof createNewTaskFormSchema>

export function CreateNewTask() {
  const { tasks, setTasks } = useContext(TasksContext)
  const [isCompleted, setIsCompleted] = useState(false)
  const createdTasks = tasks.length
  const { register, handleSubmit } = useForm<CreateNewTaskFormData>({
    resolver: zodResolver(createNewTaskFormSchema),
  })

  function handleCreateNewTask(data: CreateNewTaskFormData) {
    if (data.task.description.length === 0) {
      return
    }

    setTasks((prev) => [...prev, data.task])
  }

  function removeTask(index: number) {
    const novosItens = [...tasks.slice(0, index), ...tasks.slice(index + 1)]
    setTasks(novosItens)
  }

  return (
    <div className="flex items-center justify-center">
      <form
        className="flex flex-col max-w-[736px] relative"
        onSubmit={handleSubmit(handleCreateNewTask)}
      >
        <div className="flex gap-2 relative bottom-5">
          <input
            className="w-[638px] h-[54px] p-5 rounded-md bg-gray-400 placeholder:text-gray-300 outline-none focus:ring focus:ring-purple-defaulf"
            placeholder="Adicione uma nova tarefa"
            type="text"
            {...register('task.description')}
          />
          <button
            className="flex items-center justify-center gap-1 bg-blue-dark w-[90px] h-[52px] rounded-md hover:bg-blue-defaulf"
            type="submit"
          >
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className="mt-16 w-[736px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-defaulf">
                Tarefas criadas
              </span>
              <span className="bg-gray-400 rounded-full w-6 text-center font-semibold">
                {createdTasks}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-purple-defaulf">Concluídas</span>
              <span className="bg-gray-400 rounded-full w-[55px] text-center font-semibold flex items-center justify-center gap-px">
                {} <p>de</p> <p>{createdTasks}</p>
              </span>
            </div>
          </div>
        </div>

        {tasks.length === 0 ? (
          <div className="w-[736px] mt-10 flex items-center justify-center flex-col p-10">
            <Clipboard size={54} color="#333333" />

            <strong className="mt-4 text-gray-300 text-xl">
              Você ainda não tem tarefas cadastradas
            </strong>
            <span className="text-gray-300 text-lg">
              Crie e organize seus itens a fazer
            </span>
          </div>
        ) : (
          <>
            {tasks.map((task, i) => (
              <div
                key={i}
                className="bg-gray-400 mt-10 p-7 rounded-md flex items-center justify-between"
              >
                <Checkbox.Root
                  checked={isCompleted}
                  onClick={() => setIsCompleted(!isCompleted)}
                  data-checked={isCompleted}
                  className="flex items-center justify-center h-[20px] w-[20px] bg-trasparent border-2 border-solid border-blue-defaulf p-1 rounded-full data-[checked=true]:text-line-through data-[checked=true]:border-0 data-[checked=true]:bg-purple-defaulf"
                >
                  <Checkbox.Indicator className="font-semibold">
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox.Root>

                <span>{task.description}</span>

                <button
                  onClick={() => removeTask(i)}
                  type="button"
                  className="hover:text-danger"
                >
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </>
        )}
      </form>
    </div>
  )
}
