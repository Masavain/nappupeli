const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const counterRouter = require('./controllers/counter')
const winnersRouter = require('./controllers/winners')

const port = 4001
const url = 'mongodb://Masavain:Nappipeli123@ds223605.mlab.com:23605/nappipeli'

const app = express()
const server = app.listen(4001)

mongoose.connect(url)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)
app.use('/api/counters', counterRouter)
app.use('/api/winners', winnersRouter)

app.use(middleware.logger)
app.use(middleware.error)


var io = require('socket.io').listen(server);

io.on('connection', socket => {
  console.log('New client connected')
  
  socket.on('increment', (count) => {
    console.log('button pressed with count: ', count)
    io.sockets.emit('increment', count)
  })
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))