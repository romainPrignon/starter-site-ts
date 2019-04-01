import * as actionTypes from '../actionTypes/application.actiontype'

const initialState = {}

const application = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOME_ACTION: {
      return state
    }
    default:
      return state
  }
}

export default application
