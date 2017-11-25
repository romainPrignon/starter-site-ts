import * as actionTypes from '../actionTypes/applicationActionType'

export const someAction = (foo) => dispatch => {
  return dispatch({
    type: actionTypes.SOME_ACTION,
    payload: foo
  })
}
