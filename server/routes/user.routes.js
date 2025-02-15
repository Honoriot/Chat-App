import express from 'express'
import loginHandler from '../controllers/user.controller.js'

const userRoute = express.Router()

userRoute.get('/login', loginHandler)

export default userRoute