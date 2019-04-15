import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import domain from './domain.reducer'
import application from './application.reducer'

const createRootReducer = (history) => combineReducers({
  domain,
  application,
  form,
  router: connectRouter(history)
})

export default createRootReducer
