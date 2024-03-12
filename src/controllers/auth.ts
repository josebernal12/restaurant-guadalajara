import { RequestHandler } from 'express'
import { login, register } from '../services/auth'
import { IUser } from '../interfaces/user.interfaces'
import generateToken from '../helpers/generateToken'
import { IUserModel } from '../models/UserModel'

export const registerController: RequestHandler = async (req, res) => {
  const { name, lastName, email, password, confirmPassword }: IUser = req.body
  const user = await register({ name, lastName, email, password, confirmPassword })
  console.log(user)
  res.json({
    user,
    message: "User Created Succesfully"
  })
}

export const loginController: RequestHandler = async (req, res) => {
  const { email, password }: { email: string, password: string } = req.body
  const user = await login(email, password)
  res.json(user)
}