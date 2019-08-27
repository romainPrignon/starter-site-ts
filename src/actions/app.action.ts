import { Dispatch } from 'redux'
import { SomeAction } from '../../type/app'

import { SOME_ACTION } from '../constants/app.constant'

export const someAction = (foo: any) => (dispatch: Dispatch<SomeAction>): SomeAction => {
  return dispatch({
    type: SOME_ACTION,
    payload: foo
  })
}
