import { Fetchable, Optional } from './utils'

export type ADD_SECRET = 'ADD_SECRET'

export type FETCH_SECRET_REQUEST = 'FETCH_SECRET_REQUEST'
export type FETCH_SECRET_SUCCESS = 'FETCH_SECRET_SUCCESS'
export type FETCH_SECRET_FAILURE = 'FETCH_SECRET_FAILURE'

export type FETCH_SECRETS_REQUEST = 'FETCH_SECRETS_REQUEST'
export type FETCH_SECRETS_SUCCESS = 'FETCH_SECRETS_SUCCESS'
export type FETCH_SECRETS_FAILURE = 'FETCH_SECRETS_FAILURE'

export type Secret = {
  id: string
  content: string
}

export type SecretInput = {
  content: string
}

export type AddSecretAction = {
  type: ADD_SECRET,
  payload: string
}

export type FetchSecretRequestAction = {
  type: FETCH_SECRET_REQUEST,
}
export type FetchSecretSuccessAction = {
  type: FETCH_SECRET_SUCCESS,
  payload: Secret
}
export type FetchSecretFailureAction = {
  type: FETCH_SECRET_FAILURE,
  payload: Error
}

export type FetchSecretsRequestAction = {
  type: FETCH_SECRETS_REQUEST,
}
export type FetchSecretsSuccessAction = {
  type: FETCH_SECRETS_SUCCESS,
  payload: Array<Secret>
}
export type FetchSecretsFailureAction = {
  type: FETCH_SECRETS_FAILURE,
  payload: Error
}

export type DomainAction = AddSecretAction
  | FetchSecretRequestAction
  | FetchSecretSuccessAction
  | FetchSecretFailureAction
  | FetchSecretsRequestAction
  | FetchSecretsSuccessAction
  | FetchSecretsFailureAction

export type SecretState = {
  lastSecretId: Optional<string>
  secrets: Fetchable<Array<Secret>>
}

export type DomainState = SecretState
