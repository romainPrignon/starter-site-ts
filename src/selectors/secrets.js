export const getSecrets = (state) => state.domain.secrets || []

export const getSecretById = (state, secretId) => getSecrets(state).find(secret => secret.id === secretId)

export const getLastSecretId = (state) => state.domain.lastSecretId
