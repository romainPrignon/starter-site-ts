import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { User, State } from '../../type/index'

import { push } from 'connected-react-router'
import { LOGIN } from '../actionTypes/auth.actionType'
import * as authEffect from '../effects/auth.effect'

export type LoginAction = {
  type: LOGIN,
  payload: User
}

export type LoginActionDispatcher = ThunkAction<Promise<LoginAction>, State, {}, LoginAction>

export type AuthAction = LoginAction

export const login = ({ login: log, mdp }: any): LoginActionDispatcher =>
  async (dispatch: Dispatch<LoginAction>): Promise<LoginAction> => {
    const user = await authEffect.login({ login: log, mdp })
    // @ts-ignore
    dispatch(push('/'))

    return dispatch({
      type: LOGIN,
      payload: user
    })
  }
