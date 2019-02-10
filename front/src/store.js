import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import counterReducer from './reducers/counterReducer'
import winnersReducer from './reducers/winnersReducer'
import socketReducer from './reducers/socketReducer'


const reducer = combineReducers({
    counter: counterReducer,
    notification: notificationReducer,
    winners: winnersReducer,
    socket: socketReducer
  })

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store