import { History } from 'history'
import { State } from '../../type'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import auth from './auth.reducer'
import app from './app.reducer'
import domain from './domain.reducer'

const createRootReducer = (history: History) => combineReducers<State>({
  auth,
  app,
  domain,
  form,
  router: connectRouter(history)
})

export default createRootReducer
