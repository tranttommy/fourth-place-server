import { Request, Router } from 'express'
import { authenticate, register, remove, verify } from '../../services/cognito'

type AuthBody = { email: string; password: string }
type VerifyBody = { email: string; code: string }

export const auth = Router()
  .post<{}, {}, AuthBody>('/register', async (req, res) =>
    res.json(await register(req.body.email, req.body.password))
  )
  .post<{}, {}, VerifyBody>('/verify', async (req, res) =>
    res.json(await verify(req.body.email, req.body.code))
  )
  .post<{}, {}, AuthBody>('/authenticate', async (req, res) =>
    res.json(await authenticate(req.body.email, req.body.password))
  )
  .get('/remove', async (req, res) => res.json(await remove('')))
