import { Dispatch } from 'redux'

import { SOME_ACTION } from '../actionTypes/application.actionType'

export type SomeAction = {
  type: SOME_ACTION,
  payload: any
}

export type ApplicationAction = SomeAction

export const someAction = (foo: any) => (dispatch: Dispatch<SomeAction>): SomeAction => {
  return dispatch({
    type: SOME_ACTION,
    payload: foo
  })
}
