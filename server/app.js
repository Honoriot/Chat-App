import express from 'express'
import userRoute from './routes/user.routes.js'

const app = express()

app.use('/user', userRoute)

app.get('/*', (req, res) => {
  res.send('Hello World! This is end route')
  res.end()
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})