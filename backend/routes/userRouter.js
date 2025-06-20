import express from 'express'
import userController from '../controllers/userController.js'

const userRouter=express.Router()

userRouter.post('/register',userController.registerUser)
userRouter.post('/login',userController.loginUser)
userRouter.post('/admin',userController.adminLogin)

export default userRouter