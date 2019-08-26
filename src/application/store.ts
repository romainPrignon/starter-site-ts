import { History } from 'history'
import { State } from '../../type'

import { createStore as createReduxStore, applyMiddleware, DeepPartial } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

import createRootReducer from '../reducers/root.reducer'

const logger = createLogger({
  collapsed: true
})

const createStore = (history: History) => (preloadedState: DeepPartial<State> = {}) => {
  const middlewares = [
    thunk,
    routerMiddleware(history)
  ]

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger)
  }

  return createReduxStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  )
}

export default createStore
