import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers'

export const history = createHistory()

const middlewares = [
  thunk,
  routerMiddleware(history)
]

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )

export default configureStore
