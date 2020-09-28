import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../database/connection'
import authConfig from '../config/auth.json'

const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400})
}

export default class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = await req.body

    const hash = await bcrypt.hash(password, 10)

    const trx = await db.transaction()

    try {
      await trx('users')
        .where('email', '=', email)
        .then((userNameList) => {
          if (userNameList.length === 0) {
            return trx('users')
              .insert({
                name,
                email,
                password: hash
              })
              .then((user) => {
                res.status(201).send(user)
              })
          }
        })

      await trx.commit()

      return res.status(400).json({
        error: 'User already registered'
      })
    } catch (err) {
      await trx.rollback()

      return res.status(400).json({
        error: 'Unexpected error while creating new user'
      })
    }
  }

  async auth(req: Request, res: Response) {
    const { email, password } = await req.body

    try {
      const users = await db('users').where('email', '=', email)
      console.log(users)

      const user = users[0]
  
      if(!await bcrypt.compare(password, user.password)){
          return res.status(400).json({error: 'Password is incorrect'})
        }
  
      user.password = undefined
  
      return res.status(200).json({user, token: generateToken({id: user.id})})
    } catch (err) {
      return res.status(400).json({
        error: 'Email is incorrect'
      })
    }

  }
}
