'use client'

import { createTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input type="text" name="content" id="content" />
        <button type="submit">New Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm
