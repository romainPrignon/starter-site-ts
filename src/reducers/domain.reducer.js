import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

const initialState = {
  lastSecretId: null,
  secrets: []
}

const domain = (state = initialState, action) => {
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
