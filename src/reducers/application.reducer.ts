import { State } from '../../type'
import { ApplicationAction } from '../actions/application.action'

import { SOME_ACTION } from '../actionTypes/application.actionType'

const initialState = {}

const application = (state: State['application'] = initialState, action: ApplicationAction): State['application'] => {
  switch (action.type) {
    case SOME_ACTION: {
      return state
    }
    default:
      return state
  }
}

export default application
