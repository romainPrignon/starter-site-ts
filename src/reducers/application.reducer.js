import { SOME_ACTION } from '../actionTypes/application.actionType'

const initialState = {}

const application = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION: {
      return state
    }
    default:
      return state
  }
}

export default application
