import { State } from '../../type'
import { AppAction } from '../../type/app'

import { SOME_ACTION } from '../constants/app.constant'

const initialState = {}

const app = (state: State['app'] = initialState, action: AppAction): State['app'] => {
  switch (action.type) {
    case SOME_ACTION: {
      return state
    }
    default:
      return state
  }
}

export default app
