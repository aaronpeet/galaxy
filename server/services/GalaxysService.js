import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxysService {
  async getAll(query = {}) {
    return await dbContext.Galaxys.find(query)
  }
}

export const galaxysService = new GalaxysService()
