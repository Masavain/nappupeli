const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const counterRouter = require('./controllers/counter')
const winnersRouter = require('./controllers/winners')

const config = require('./utils/config')
const  MONGODB_URI='mongodb://Masavain:Nappipeli123@ds223605.mlab.com:23605/nappipeli'
// PORT=4001


const app = express()
const server = require('http').createServer(app)
server.listen(config.port, () => console.log(`Listening on port ${config.port}`))
const io = require('socket.io')(server);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true}) 
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)
app.use('/api/counters', counterRouter)
app.use('/api/winners', winnersRouter)
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})
app.use(middleware.logger)
app.use(middleware.error)

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

