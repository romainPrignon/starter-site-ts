import { State } from '../../type'
import { DomainAction } from '../actions/domain.action'

import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

const initialState = {
  lastSecretId: undefined,
  secrets: {
    data: [],
    pending: false,
    error: undefined
  }
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
        secrets: {
          data: [
            ...state.secrets.data,
            {
              data: action.payload,
              pending: true,
              error: undefined
            }
          ],
          pending: true,
          error: undefined
        }
      }
    }
    default: {
      return state
    }
  }
}

export default domain
