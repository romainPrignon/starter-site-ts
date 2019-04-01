import * as actionTypes from '../actionTypes/domain.actiontype'

const initialState = {
  lastSecretId: null,
  secrets: []
}

const domain = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SECRET: {
      return {
        ...state,
        lastSecretId: action.payload
      }
    }
    case actionTypes.FETCH_SECRET: {
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
