import { Dispatch } from 'redux'
import { SecretInput, AddSecretAction } from '../../type/domain'
import { Action } from '../../type/utils'

import {
  ADD_SECRET,
  FETCH_SECRET_REQUEST,
  FETCH_SECRET_SUCCESS,
  FETCH_SECRET_FAILURE,
  FETCH_SECRETS_REQUEST,
  FETCH_SECRETS_SUCCESS,
  FETCH_SECRETS_FAILURE
} from '../constants/domain.constant'
import * as domainEffect from '../effects/secret.effect'

export const addSecret = (secret: SecretInput) => {
  return async (dispatch: Dispatch<AddSecretAction>): Promise<AddSecretAction> => {
    const secretId = await domainEffect.postSecret(secret)

    return dispatch({
      type: ADD_SECRET,
      payload: secretId
    })
  }
}

export const fetchSecret = (secretId: string) => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch({
        type: FETCH_SECRET_REQUEST
      })

      const secret = await domainEffect.getSecretById(secretId)

      return dispatch({
        type: FETCH_SECRET_SUCCESS,
        payload: secret
      })
    } catch (err) {
      return dispatch({
        type: FETCH_SECRET_FAILURE,
        payload: err
      })
    }
  }
}

export const fetchSecrets = () => {
  return async (dispatch: Dispatch): Promise<Action> => {
    try {
      dispatch({
        type: FETCH_SECRETS_REQUEST
      })

      const secrets = await domainEffect.getSecrets()

      return dispatch({
        type: FETCH_SECRETS_SUCCESS,
        payload: secrets
      })
    } catch (err) {
      return dispatch({
        type: FETCH_SECRETS_FAILURE,
        payload: err
      })
    }
  }
}
