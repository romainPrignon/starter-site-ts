import { SOME_ACTION } from '../actionTypes/application.actionType'

export const someAction = (foo) => (dispatch) => {
  return dispatch({
    type: SOME_ACTION,
    payload: foo
  })
}
