import { Router } from 'express'
import { auth } from './auth'

export const v1 = Router()

v1.use('/auth', auth)
