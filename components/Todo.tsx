'use client'
import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({ data }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        data.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(data.id))}
    >
      {data.content}
    </div>
  )
}

export default Todo
