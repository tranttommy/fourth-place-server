import { Router } from 'express'

export const authRouter = Router()

authRouter.get('/', (req, res) => res.send('/auth'))

authRouter.get('/poop', (req, res) => res.send('/auth/poop'))
