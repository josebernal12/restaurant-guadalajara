import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User from '../models/UserModel';
import { MyJwtInterfaces } from '../interfaces/jwtInterfaces';

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkAuth = async (req: RequestExt, res: Response, next: NextFunction) => {
  let token = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.KEYSECRET || 'defaultSecret') as MyJwtInterfaces
      const user = await User.findByPk(decoded.id)
      if (user) {
        req.user = user
        return next()
      }

    } catch (error) {
      return res.status(404).json({ msg: 'there was a mistake' })

    }
  }
  if (!token) {
    const error = new Error('Token no valid')
    return res.status(401).json({ msg: error.message })
  }
  next()
}

export default checkAuth