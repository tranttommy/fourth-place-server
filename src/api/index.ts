import { Router } from 'express'
import { v1 } from './v1'

export const router = Router().use('/v1', v1)
