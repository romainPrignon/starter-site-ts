import { State } from '../../type'
import { AuthAction } from '../../type/auth'

import { LOGIN, LOGOUT } from '../constants/auth.constant'

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
    case LOGOUT: {
      return {
        ...state,
        user: undefined
      }
    }
    default: {
      return state
    }
  }
}

export default auth
