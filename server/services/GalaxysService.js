import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxysService {
  async getAll(query = {}) {
    return await dbContext.Galaxys.find(query)
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxys.findById(id)
    if (!galaxy) {
      throw new BadRequest('Invalid ID')
    }
    return galaxy
  }

  async create(body) {
    return await dbContext.Galaxys.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const galaxy = await dbContext.Galaxys.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return galaxy
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Galaxys.findByIdAndDelete(id)
  }
}

export const galaxysService = new GalaxysService()
