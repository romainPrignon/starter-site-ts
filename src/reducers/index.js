import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import domain from './domainReducer'
import application from './applicationReducer'

const rootReducer = combineReducers({
  domain,
  application,
  router: routerReducer,
  form: formReducer
})

export default rootReducer
