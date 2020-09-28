import express from 'express'
import Top10sController from '../controllers/Top10sController'

import authMiddleware from '../middlewares/auth'

const top10sRoutes = express.Router()
top10sRoutes.use(authMiddleware)

const top10sController = new Top10sController()

top10sRoutes.post('/top10s', top10sController.create)
top10sRoutes.get('/top10s', top10sController.index)
top10sRoutes.get('/top10s/:id', top10sController.listUserTop10s)
top10sRoutes.delete('/top10s/:id', top10sController.delete)

export default top10sRoutes
