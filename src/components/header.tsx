import todoLogo from '../assets/logo-todo.svg'

export function Header() {
  return (
    <div className="bg-gray-700 w-full h-[200px] flex items-center justify-center">
      <img src={todoLogo} alt="TO-DO logo" />
    </div>
  )
}
