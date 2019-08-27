import { Secret, SecretInput } from '../../type/domain'

import { sleep } from '../utils'

export const getSecretById = async (secretId: string): Promise<Secret> => {
  await sleep(5000)

  return {
    id: secretId,
    content: 'this is a secret'
  }
}

export const postSecret = async (secret: SecretInput): Promise<string> => {
  await sleep(5000)

  console.log(`POST: ${secret}`)

  return 'some-hash'
}
