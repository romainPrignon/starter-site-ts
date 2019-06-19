import { State } from '../../type'
import { DomainAction } from '../actions/domain.action'

import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

const initialState = {
  lastSecretId: undefined,
  secrets: []
}

const domain = (state: State['domain'] = initialState, action: DomainAction): State['domain'] => {
  switch (action.type) {
    case ADD_SECRET: {
      return {
        ...state,
        lastSecretId: action.payload
      }
    }
    case FETCH_SECRET: {
      return {
        ...state,
        secrets: [
          ...state.secrets,
          action.payload
        ]
      }
    }
    default: {
      return state
    }
  }
}

export default domain
