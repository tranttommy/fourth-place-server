import express from 'express'
import { port } from './config'
import { router } from './api'

const app = express()

app.use('/api', router)

app.listen(port, () => console.log(`Server running at ${port}`))
