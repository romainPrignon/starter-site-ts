import { State } from '../../type'
import { AuthAction } from '../actions/auth.action'

import { LOGIN } from '../actionTypes/auth.actionType'

const initialState = {
  user: undefined
}

const auth = (state: State['auth'] = initialState, action: AuthAction): State['auth'] => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default auth
