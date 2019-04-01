import { createStore as createReduxStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from '../reducers/root.reducer'

const createStore = (history) => (preloadedState) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  return createReduxStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  )
}

export default createStore
