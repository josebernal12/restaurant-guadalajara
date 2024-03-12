import { Router } from 'express'
import { loginController, registerController } from '../controllers/auth'
import { deleteUserController, getUserByIdController, getUsersController, updateUserController } from '../controllers/users'

const router = Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/users', getUsersController)
router.get('/users/:id', getUserByIdController)
router.put('/users/update/:id', updateUserController)
router.delete('/users/delete/:id', deleteUserController)
export default router