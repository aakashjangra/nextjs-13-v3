import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  await new Promise<void>((resolve, reject) =>
    setTimeout(() => resolve(), 2000)
  )
  const todos = await getData()
  console.log(todos)

  return (
    <div>
      Todos
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
