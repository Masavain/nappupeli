const mongoose = require('mongoose')

const counterSchema = new mongoose.Schema({
  state: Number,
})

counterSchema.statics.format = (counter) => {
  return {
    state: counter.state,
  }
}

const Counter = mongoose.model('Counter', counterSchema)

module.exports = Counter
