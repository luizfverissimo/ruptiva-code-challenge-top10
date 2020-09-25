import { Request, Response } from 'express'

import db from '../database/connection'

export default class Top10sController {
  async index(req: Request, res: Response) {

    const top10sLists = await db('top10s').join('users', 'users.id', '=', 'top10s.user_id').select('top10s.id', 'top10s.title', 'top10s.items', 'users.name')

    return res.json(top10sLists)
  }

  async listUserTop10s(req: Request, res: Response) {
    const { id } = await req.params

    if (!id) {
      return res.status(400).json({
        error: 'Error: user not found to load top10s lists'
      })
    }

    const top10sLists = await db('top10s').where('user_id', '=', id)

    return res.json(top10sLists)
  }

  async create(req: Request, res: Response) {
    const { user_id, title, items } = await req.body

    const itemsString = JSON.stringify(items)

    const trx = await db.transaction()

    try {
      await trx('top10s').insert({
        user_id,
        title,
        items: itemsString
      })

      await trx.commit()

      return res.status(201).send()
    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while creating new top10 list'
      })
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = await req.body
    

    if (!id) {
      return res.status(400).json({
        error: 'Error: id list not found'
      })
    }

    const trx = await db.transaction()

    try {
      await trx('top10s').where('id', '=', id).del()

      trx.commit()

      return res.status(200).send()
    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while deleting top10 list'
      })
    }

  }
}
