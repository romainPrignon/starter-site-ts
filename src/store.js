// todo
// - move to application

import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const configureStore = (history) => (preloadedState) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  return createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
