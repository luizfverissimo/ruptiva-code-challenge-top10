import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import top10sRoutes from './routes/top10sRoutes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(top10sRoutes)

app.listen(3333)
