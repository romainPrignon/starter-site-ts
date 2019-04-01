import * as actionTypes from '../actionTypes/application.actiontype'

export const someAction = (foo) => (dispatch) => {
  return dispatch({
    type: actionTypes.SOME_ACTION,
    payload: foo
  })
}
