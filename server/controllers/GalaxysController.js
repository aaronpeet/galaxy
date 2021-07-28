import { galaxysService } from '../services/GalaxysService'
import BaseController from '../utils/BaseController'

export class StudentsController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const galaxys = await galaxysService.getAll(req.query)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }
}
