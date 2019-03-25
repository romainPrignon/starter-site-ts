import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import { reducer as formReducer } from 'redux-form'

import domain from './domainReducer'
import application from './applicationReducer'

const rootReducer = (history) => combineReducers({
  domain,
  application,
  router: connectRouter(history)
  // form: formReducer
})

export default rootReducer
