const counterRouter = require('express').Router()
const Counter = require('../models/counter')


counterRouter.get('/:id', async (request, response) => {
  Counter.findById(request.params.id).then(counter => response.json(Counter.format(counter)))
})

counterRouter.put('/:id', async (request, response) => {
  const body = request.body

  const state = body.state
  const uusi = {
    state
  }

  const counter = await Counter.findByIdAndUpdate(request.params.id, uusi, { new: true })
  return response.json(counter)

})

counterRouter.post('/', async (request, response) => {
  const counter = new Counter({
    state: 0
  })
  const saved = await counter.save()
  response.json(Counter.format(counter))
})

module.exports = counterRouter