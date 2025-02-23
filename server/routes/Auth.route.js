import express from 'express'
import { googleLogin, Login, Logout, Register } from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post('/register',Register)
authRoute.post('/login',Login)
authRoute.post('/google-login', googleLogin)
authRoute.get('/logout',Logout)


export default authRoute;