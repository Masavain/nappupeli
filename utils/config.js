if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
// MONGODB_URI=mongodb://Masavain:Nappipeli123@ds223605.mlab.com:23605/nappipeli
// PORT=4001
let port = process.env.PORT
let mongoUrl =  process.env.MONGODB_URI

  module.exports = {
    mongoUrl,
    port
  }