import { RequestHandler } from "express";
import { deleteUser, getUserById, getUsers, updateUser } from "../services/users";

export const getUsersController: RequestHandler = async (req, res) => {
  const users = await getUsers()
  res.json(users)
}

export const getUserByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params
  const users = await getUserById(id)
  res.json(users)
}

export const deleteUserController: RequestHandler = async (req, res) => {
  const { id } = req.params
  const message = await deleteUser(id)
  res.json(message)
}

export const updateUserController: RequestHandler = async (req, res) => {
  const { name, lastName, email }: { name: string, lastName: string, email: string } = req.body
  const { id } = req.params

  const user = await updateUser(id, name, lastName, email)
  res.json(user)
}