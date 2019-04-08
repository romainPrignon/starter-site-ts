import { ADD_SECRET, FETCH_SECRET } from '../actionTypes/domain.actionType'

import { getSecretById, postSecret } from '../effects/secret.effect'

export const addSecret = (secret) => async (dispatch) => {
  const data = await postSecret(secret)

  return dispatch({
    type: ADD_SECRET,
    payload: data
  })
}

export const fetchSecret = (secretId) => async (dispatch) => {
  const secret = await getSecretById(secretId)

  return dispatch({
    type: FETCH_SECRET,
    payload: secret
  })
}
