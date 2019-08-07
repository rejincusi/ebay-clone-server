const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const login = require('./auth/router')
const router = require('./auth/router')
const userRouter = require('./user/router')
const parseMiddleware = bodyParser.json()
const advertisementRouter = require('./advertisement/router')

const corsMiddleware = cors()

app.use(corsMiddleware)
app.use(parseMiddleware)
app.use(advertisementRouter)
app.use(login)
app.use(router)
app.use(userRouter)

app.listen(port, () => console.log('Listening to port 4000'))
app.get('/', (req, res) => res.send ('server running'))