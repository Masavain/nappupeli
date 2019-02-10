const mongoose = require('mongoose')

const winnerSchema = new mongoose.Schema({
  name: String,
  date: Date,
})

winnerSchema.statics.format = (winner) => {
  return {
    name: winner.name,
    date: winner.date,
  }
}

const Winner = mongoose.model('Winner', winnerSchema)

module.exports = Winner
