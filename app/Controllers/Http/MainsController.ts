import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MainsController {

  public async welcome({view}:HttpContextContract) {
    return view.render("")
  }

}
