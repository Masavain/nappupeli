import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import winnerService from './../services/winners'
import { Alert, Button, Form, FormGroup } from 'react-bootstrap'

const Notification = ( props ) => {
    const [message, setMessage] = useState(props.message)
    const [winners, setWinners] = useState([])


    useEffect(async () => {
        await winnerService.getAll().then(response => {
            setWinners(response.data)
        })
    }, [])


    if (message === '') {
        return null
    }
    const style = {
        position: 'relative',
        border: 'solid',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        left: 10,
        width: '300px'
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const winnerObject = {
            name: event.target.name.value,
            date: new Date(),
        }
        await winnerService.create(winnerObject)
        await winnerService.getAll().then(response => {
            setWinners(response.data)
        })
        setMessage('')
    }
    const deleteMessage = async (event) => {
        event.preventDefault()
        setMessage('')
    }
    return (
        null
    )

}

// class Notification extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: props.message,
//             winners: []
//         }
//     }

//     componentDidMount = async () => {
//         const winners = await winnerService.getAll()
//         this.setState({ winners: winners })
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault()
//         const winnerObject = {
//             name: event.target.name.value,
//             date: new Date(),
//         }
//         await winnerService.create(winnerObject)
//         const winners = await winnerService.getAll()
//         this.setState({ message:'', winners: winners})
//     }

//     deleteMessage = async (event) => {
//         event.preventDefault()
//         this.setState({ message:''})
//     }


//     render() {
//         if (this.state.message === '') {
//             return null
//         }
//         const style = {
//             position: 'relative',
//             border: 'solid',
//             margin: 10,
//             padding: 10,
//             borderWidth: 1,
//             left: 10,
//             width: '300px'
//         }
//         return(
//             <Alert style={style}>
//                 <h3>{this.state.message}</h3>
//                 <Form class="col s12" style={{margin:4 }} onSubmit={e => this.handleSubmit(e)}>
//                     <Form.Group controlId="name">
//                         <Form.Control type="text" placeholder="enter name">
//                         </Form.Control>
//                     </Form.Group>
//                     <Button variant="primary" type="submit" style={{ position: 'relative' }}>Submit</Button>
//                 </Form>
//                 <a style={{margin: 4}} class="btn-floating btn-small waves-effect waves-light red" onClick={() => this.deleteMessage()}><i class="material-icons">cancel</i></a>
//             </Alert>
//         )
//     }
// }

export default Notification
