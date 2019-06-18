import { Dispatch } from 'redux'
import { Secret } from '../../type'

import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

import { getSecretById, postSecret } from '../effects/secret.effect'

export type AddSecretAction = {
  type: ADD_SECRET,
  payload: string
}

export type FetchSecretAction = {
  type: FETCH_SECRET,
  payload: Secret
}

export type DomainAction = AddSecretAction | FetchSecretAction

export const addSecret = (secret: Secret) => async (dispatch: Dispatch<AddSecretAction>): Promise<AddSecretAction> => {
  const data = await postSecret(secret)

  return dispatch({
    type: ADD_SECRET,
    payload: data
  })
}

export const fetchSecret = (secretId: string) =>
  async (dispatch: Dispatch<FetchSecretAction>): Promise<FetchSecretAction> => {
    const secret = await getSecretById(secretId)

    return dispatch({
      type: FETCH_SECRET,
      payload: secret
    })
  }
