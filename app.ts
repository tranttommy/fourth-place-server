import express from 'express'
import { authRouter } from './routes/auth'

const app = express()

const port = process.env.PORT || 3000

app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
