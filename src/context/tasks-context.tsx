import { createContext, useState } from 'react'

interface Task {
  description: string
}

interface TaskContextProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TasksContext = createContext({} as TaskContextProps)

interface TaskProviderProps {
  children: React.ReactNode
}

export function TasksProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
