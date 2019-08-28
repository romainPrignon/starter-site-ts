import { Dispatch } from 'redux'
import { Credentials, LoginAction, LogoutAction } from '../../type/auth'

import { push, CallHistoryMethodAction } from 'connected-react-router'
import { LOGIN, LOGOUT } from '../constants/auth.constant'
import * as authEffect from '../effects/auth.effect'

export const login = (credentials: Credentials) => {
  return async (dispatch: Dispatch<LoginAction | CallHistoryMethodAction>): Promise<LoginAction> => {
    const user = await authEffect.login(credentials)

    const action = dispatch({
      type: LOGIN,
      payload: user
    })

    dispatch(push('/'))

    return action
  }
}

export const logout = (email: string) => {
  return async (dispatch: Dispatch<LogoutAction | CallHistoryMethodAction>): Promise<LogoutAction> => {
    await authEffect.logout(email)

    const action = dispatch({
      type: LOGOUT
    })

    dispatch(push('/login'))

    return action
  }
}
