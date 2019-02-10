import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import counterService from './services/counter'
import winnerService from './services/winners'
import { Button, ListGroup, ListGroupItem, Alert, Form, FormGroup } from 'react-bootstrap'
import Notification from './components/Notification'
class App extends Component {
  constructor() {
    super()

    this.state = {
      endpoint: "http://127.0.0.1:4001",
      count: 0,
      winCategory: 100,
      pressed: false,
      toggle: false,
      leaderboard: false,
      winners: [],
      message: ''
    }
  }

  componentWillMount = async () => {
    const countObject = await counterService.getCounter()
    var winners = await winnerService.getAll()
    winners.reverse()
    const sliced = winners.slice(0, 11)
    this.setState({ count: countObject.state, pressed: false, message: '', winners: sliced })
  }

  changeWinCategory = async (winCategory) => {
    this.setState({ winCategory })
  }

  press = async () => {
    this.setState({ pressed: true })
  }

  notifyWin = async (message) => {
    console.log('täällä')
    this.setState({ toggle: true, message })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const winnerObject = {
      name: event.target.name.value,
      date: new Date(),
    }
    await winnerService.create(winnerObject)
    var winners = await winnerService.getAll()
    winners.reverse()
    const sliced = winners.slice(0, 11)
    this.setState({ message: '', toggle: false, winners: sliced })
  }

  deleteMessage = async (event) => {
    console.log('Yritän poistaa lul')
    event.preventDefault()
    this.setState({ toggle: false, message: '' })
  }

  toggleLeaderboard = async () => {
    this.setState({ leaderboard: !this.state.leaderboard })
  }

  clicker = async () => {
    this.setState({ count: this.state.count + 10 })
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('increment', this.state.count)
    const counterObject = {
      id: '5c5aafed153cf16a0d76c6fc',
      state: this.state.count + 10
    }
    await counterService.update(counterObject)
    if (!this.state.pressed) await this.press()

    if ((this.state.count % 100 !== 0) && this.state.pressed) {
      await this.changeWinCategory(100)
    }
    if ((this.state.count % 200 === 0) && this.state.pressed) {
      await this.changeWinCategory(200)
    }
    if ((this.state.count % 500 === 0) && this.state.pressed) {
      await this.changeWinCategory(500)
    }

    if ((this.state.count % this.state.winCategory) === 0 && this.state.pressed) {
      console.log('Voitto')
      if (this.state.winCategory === 100) this.notifyWin(`You WIN a small prize!`)
      if (this.state.winCategory === 200) this.notifyWin(`You WIN a medium prize!!`)
      if (this.state.winCategory === 500) this.notifyWin(`You WIN a BIG prize!!!`)

    }


  }

  render() {
    const socket = socketIOClient(this.state.endpoint)

    socket.on('increment', (count) => {
      this.setState({ count: count + 10 })
    })

    const style = {
      position: 'relative',
      border: 'solid',
      margin: 10,
      padding: 10,
      borderWidth: 1,
      left: 10,
      width: '300px'
    }
    return (
      <div style={{ padding: 10 }}>
        <h2 style={{ position: 'relative', padding: 10 }}>{'NappUpeli'}</h2>

        <h2 style={{ position: 'relative', padding: 50 }}>{100 - (this.state.count % 100) + '...'}</h2>
        <div style={{ position: 'relative', left: 30 }}> clicks until next prize </div>
        <Button bsSize="sm" bsStyle="danger"
          onClick={() => this.clicker()}>nappu
        </Button>

        {this.state.toggle ?
          <Alert style={style}>
            <h3>{this.state.message}</h3>
            <Form class="col s12" style={{ margin: 4 }} onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="name">
                <Form.Control type="text" placeholder="enter name">
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" style={{ position: 'relative' }}>Submit</Button>
            </Form>
            <a style={{ margin: 4 }} class="btn-floating btn-small waves-effect waves-light red" onClick={(e) => this.deleteMessage(e)}><i class="material-icons">cancel</i></a>
          </Alert>
          : <div></div>}


        <Button onClick={() => this.toggleLeaderboard()}>Leaderboard</Button>
        <div> {this.state.leaderboard ?
          <ul class="collection" style={{ width: 200 }}>
            {this.state.winners.map(w => <li class="collection-item">{w.name}</li>)}
          </ul>
          : <div></div>} </div>
      </div>
    )

  }
}

export default App
