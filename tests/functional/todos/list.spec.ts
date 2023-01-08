import { test } from '@japa/runner'

test.group('Todos list', async () => {

  let id = 0;

  test('Add one todo', async ({ client }) => {
    const response = await client.post('/api/todos').form({
      "title": "Bonjour",
      "description": "description"
    })

    id = response.body()?.id
    console.log(response.body())
  })

  test('get all todos', async ({ client }) => {
    const response = await client.get('/api/todos')

    console.log(response.body())
  })

  test('get one todo', async ({ client }) => {
    const response = await client.get('/api/todos/'+id)

    console.log(response.body())
  })

  test('Update one todo', async ({ client }) => {
    const response = await client.put('/api/todos/'+id).form({
      "title": "Bonjour new",
      "description": "description new"
    })

    console.log(response.body())
  })

  test('delete one', async ({ client }) => {
    const response = await client.delete('/api/todos/'+id)

    console.log(response.body())
  })
})
