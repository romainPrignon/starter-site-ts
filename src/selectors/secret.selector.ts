import { State, Secret, Undefinable } from '../../type'

export const getSecrets = (state: State): Array<Secret> =>
  state.domain.secrets || []

export const getSecretById = (state: State, secretId: string): Undefinable<Secret> =>
  getSecrets(state).find(secret => secret.id === secretId)

export const getLastSecretId = (state: State): string =>
  state.domain.lastSecretId
