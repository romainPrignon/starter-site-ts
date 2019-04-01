import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import { reducer as formReducer } from 'redux-form'

import domain from './domain.reducer'
import application from './application.reducer'

const createRootReducer = (history) => combineReducers({
  domain,
  application,
  router: connectRouter(history)
  // form: formReducer
})

export default createRootReducer
