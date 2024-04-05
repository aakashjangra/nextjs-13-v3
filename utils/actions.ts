'use server' //executed on the server, can interact with db and stuff
//server actions can't respond back to client in nextjs13
// server actions can now respond back in Nextjs14

import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const createTodo = async (formData) => {
  console.log(formData)
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })

  revalidatePath('/todos') //delete the cache for this page, which forces that page to refresh and refetch it's content
}

export const completeTodo = async (id) => {
  await db.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}
