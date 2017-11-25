import * as actionTypes from '../actionTypes/domainActionType'

import {getSecretById, postSecret} from '../api/secret'

export const addSecret = (secret) => async (dispatch) => {
  const data = await postSecret(secret)

  return dispatch({
    type: actionTypes.ADD_SECRET,
    payload: data
  })
}

export const fetchSecret = (secretId) => async (dispatch) => {
  const secret = await getSecretById(secretId)

  return dispatch({
    type: actionTypes.FETCH_SECRET,
    payload: secret
  })
}
