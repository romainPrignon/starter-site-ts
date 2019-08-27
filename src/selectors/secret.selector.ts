import { State } from '../../type'
import { Optional } from '../../type/utils'
import { Secret } from '../../type/domain'

export const getSecrets = (state: State): Array<Secret> =>
  state.domain.secrets.data

export const getSecretById = (state: State, secretId: string): Optional<Secret> =>
  getSecrets(state).find(secret => secret.id === secretId)

export const getLastSecretId = (state: State): Optional<string> =>
  state.domain.lastSecretId
