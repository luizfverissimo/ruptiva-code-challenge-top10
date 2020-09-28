import express from 'express'
import UsersController from '../controllers/UsersController'

const userRoutes = express.Router()
const usersController = new UsersController()

//Rotas para registro e login
userRoutes.post('/users/register', usersController.create)
userRoutes.post('/users', usersController.auth)

export default userRoutes
