import { Dispatch } from 'redux'
import { Secret, State, SecretInput } from '../../type'

import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

import { getSecretById, postSecret } from '../effects/secret.effect'
import { ThunkAction } from 'redux-thunk'

export type AddSecretAction = {
  type: ADD_SECRET,
  payload: string
}

export type FetchSecretAction = {
  type: FETCH_SECRET,
  payload: Secret
}

export type FetchSecretActionDispatcher = ThunkAction<Promise<FetchSecretAction>, State, {}, FetchSecretAction>

export type DomainAction = AddSecretAction | FetchSecretAction

export const addSecret = (secret: SecretInput) => async (dispatch: Dispatch<AddSecretAction>): Promise<AddSecretAction> => {
  const data = await postSecret(secret)

  return dispatch({
    type: ADD_SECRET,
    payload: data
  })
}

export const fetchSecret = (secretId: string): FetchSecretActionDispatcher =>
  async (dispatch: Dispatch<FetchSecretAction>): Promise<FetchSecretAction> => {
    const secret = await getSecretById(secretId)

    return dispatch({
      type: FETCH_SECRET,
      payload: secret
    })
  }
