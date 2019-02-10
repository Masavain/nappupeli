const winnersRouter = require('express').Router()
const Winner = require('../models/winner')


winnersRouter.get('/', async (request, response) => {
  const winners = await Winner
    .find({})
  response.json(winners.map(Winner.format))
})

winnersRouter.post('/', async (request, response) => {
  const body = request.body
    const winner = new Winner({
      date: new Date(),
      name: body.name
    })
    console.log(body.name)
    const saved = await winner.save()
    response.json(Winner.format(winner))
})

module.exports = winnersRouter