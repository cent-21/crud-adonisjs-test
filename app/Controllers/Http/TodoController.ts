import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'
import TodoValidator from '../../Validators/TodoValidator';

export default class TodoController {
  public async index({}: HttpContextContract) {
    return await Todo.all()
  }

  public async store({request}: HttpContextContract) {
    try {
      const todo = new Todo()
      return todo.merge(await request.validate(TodoValidator)).save()
    } catch (error) {
      return error
    }
  }

  public async show({params}: HttpContextContract) {
    const todo = await Todo.find(params.id)
    return todo
  }

  public async update({params, request, response}: HttpContextContract) {
    let todo = await Todo.find(params.id)
    if (todo) {
      todo = await todo.merge(await request.validate(TodoValidator)).save()
      return todo
    }
    return response.safeStatus(404);
  }

  public async destroy({params, response}: HttpContextContract) {
    const todo = await Todo.find(params.id)
    await todo?.delete()
    return response.json({'message': "Deleted successfully"})
  }
}
