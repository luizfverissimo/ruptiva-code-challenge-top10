import express from 'express'
import UsersController from '../controllers/UsersController'

const userRoutes = express.Router()
const usersController = new UsersController()

userRoutes.post('/users', usersController.create)
userRoutes.get('/users', usersController.auth)

export default userRoutes
