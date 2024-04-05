import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
