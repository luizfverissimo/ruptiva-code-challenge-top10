import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

//Observa se a requisição possui o token JWT, se sim, realiza a ação na rota desejada
const authMiddleware = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization

  if(!authHeader) res.status(401).send({error: 'No token provided'})

  const parts: string[] = authHeader.split(' ')
  if(parts.length !== 2) res.status(401).send({error: 'Token error'})

  const [scheme, token] = parts

  if(!/^Bearer$/i.test(scheme)) res.status(401).send({error: 'Token malformatted'})

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if(err) res.status(401).send({error: 'Invalid Token'})

    return next()
  })
}

export default authMiddleware