import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers'

export const history = createHistory()

const middlewares = [
  thunk,
  routerMiddleware(history)
]

const configureStore = preloadedState =>
  createStore(
    rootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  )

export default configureStore
